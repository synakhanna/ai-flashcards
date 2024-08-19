import { NextResponse } from "next/server";
import Stripe from "stripe";
import {doc, getDoc, updateDoc } from 'firebase/firestore';
import {db} from '../../firebase';

const formatAmountForStripe = (amount, currency) => {
  return Math.round(amount * 100);
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
});

export async function POST(req) {
    try {
        const { userId } = await req.json(); // Retrieve user ID from the request body

        // Check if the user already has an associated billing account
        const userRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists() && userDoc.data().stripeCustomerId) {
            // User already has billing info, return it instead of creating a new checkout session
            const customer = await stripe.customers.retrieve(userDoc.data().stripeCustomerId);
            return NextResponse.json({ billingDetails: customer }, { status: 200 });
        } else {
            // Proceed with Stripe checkout session creation
            const params = {
                mode: "subscription",
                payment_method_types: ["card"],
                line_items: [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: "CodeFlash",
                            },
                            unit_amount: formatAmountForStripe(6.99, "usd"),
                            recurring: {
                                interval: "month",
                                interval_count: 1,
                            },
                        },
                        quantity: 1,
                    },
                ],
                success_url: `${req.headers.get('origin')}/Code?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.get('origin')}/Billing`,
            };

            const checkoutSession = await stripe.checkout.sessions.create(params);

            // Save session ID to Firebase database
            await updateDoc(userRef, {
                stripeCheckoutSessionId: checkoutSession.id, // Add session ID to the user document
            });

            return NextResponse.json(checkoutSession, { status: 200 });
        }
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return new NextResponse(
            JSON.stringify({ error: { message: error.message } }),
            { status: 500 }
        );
    }
}

export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    try {
        if (!userId) {
            throw new Error('User ID is required');
        }

        // Fetch user document from Firebase to get the stripeCheckoutSessionId
        const userRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists() || !userDoc.data().stripeCheckoutSessionId) {
            throw new Error('No Stripe Checkout session found for this user');
        }

        const session_id = userDoc.data().stripeCheckoutSessionId;

        // Retrieve the checkout session from Stripe
        const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

        // Get the subscription ID from the session
        const subscriptionId = checkoutSession.subscription;

        if (!subscriptionId) {
            throw new Error('No subscription found for this session');
        }

        // Retrieve the subscription details from Stripe
        const subscription = await stripe.subscriptions.retrieve(subscriptionId);

        return NextResponse.json({
            billingDetails: {
                email: checkoutSession.customer_details.email,
                customerId: checkoutSession.customer,
                subscriptionStart: subscription.current_period_start,
                subscriptionEnd: subscription.current_period_end,
                status: subscription.status,
                plan: subscription.items.data[0].plan.nickname // Assuming only one plan
            }
        });
    } catch (error) {
        console.error('Error retrieving subscription details:', error);
        return NextResponse.json({ error: { message: error.message } }, { status: 500 });
    }
}
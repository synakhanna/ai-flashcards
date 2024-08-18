import { NextResponse } from "next/server";
import Stripe from "stripe";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Import your Firebase setup

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function GET(req) {
  const { stripeCustomerId } = req.query;

  try {
    if (!stripeCustomerId) {
      throw new Error("Stripe customer ID is required.");
    }

    // Retrieve the customer details from Stripe
    const customer = await stripe.customers.retrieve(stripeCustomerId);

    // Fetch active subscription details
    const subscriptions = await stripe.subscriptions.list({
      customer: stripeCustomerId,
      status: 'active',
      limit: 1, // Adjust the limit if needed
    });

    const subscriptionStatus = subscriptions.data.length > 0
      ? subscriptions.data[0].status
      : "No active subscription";

    return NextResponse.json({
      email: customer.email,
      name: customer.name,
      subscriptionStatus,
    });
  } catch (error) {
    console.error("Error retrieving Stripe customer data:", error);
    return new NextResponse(
      JSON.stringify({ error: { message: error.message } }),
      { status: 500 }
    );
  }
}
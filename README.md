# CodeFlash ⚡📚

Welcome to **CodeFlash**, a web application designed to help you ace your coding interviews and exams! 🚀 This app lets you create, save, and review flashcards with questions and answers for various programming languages. It's built with modern web technologies and leverages Firebase for storing user data and Clerk for authentication. 💻

## Features ✨

- **Flashcard Navigation**: Easily flip between flashcards with intuitive controls. 🔄
- **Create Flashcards**: Add new flashcards with a question and answer format. ✍️
- **Save Flashcards**: Save your flashcards to the cloud for easy access later. ☁️
- **User Authentication**: Secure login and sign-up with Clerk. 🔒
- **Responsive Design**: Enjoy a seamless experience across devices. 📱💻

## Getting Started 🚀

### Prerequisites 🛠️

- **Node.js** (v14.x or higher) and **npm** installed.
- A Firebase project set up with Firestore enabled.
- A Clerk account for authentication.

### Installation 🔧

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/codeflash.git
   cd codeflash

2. **Install dependencies**:
   npm install

3. **Set up environment variables:**
   Create a .env.local file in the root of your project and add your Firebase and Clerk credentials:

   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api

4. **Run the app:**:

   npm run dev

  The app will be available at http://localhost:3000. 

# Details 📋

## Usage 🎯

### Creating Flashcards 📝
 - 1. Log in to your account using the "Sign In" page.
 - 2. Navigate to the "Flash Card" section.
 - 3. select the programming language, and hit "Save". 🎉

### Reviewing Flashcards 📖 
 - Go to the "Saved Cards" page to see all your saved flashcards.
 - Flip through the cards, test your knowledge, and prepare confidently for your exams or interviews! 💪

### Technologies Used 🛠️
 - Next.js: Framework for building the app.
 - Firebase: Backend as a service for storing flashcards and user data.
 - Clerk: Authentication service for secure user sign-in.
 - React: For building interactive UI components.
 - CSS Modules: For styling the app with scoped CSS.

## Contribution by 🤝

### Fatima Riaz
### Syna Khanna
### Mukut Chowdhury
### Tahmidur Rabb

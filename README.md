# NoteSaver 🚀

A premium, secure note-taking application built with Next.js and Firebase.

## Features
- **Advanced UI/UX**: Modern glassmorphism design with smooth animations using Framer Motion.
- **Secure Authentication**: Email/Password login and Google Sign-in.
- **Customizable Notes**: Choose from multiple colors and templates (Modern, Minimal, Glass).
- **Public Sharing**: Generate secure, sharable links for your notes.
- **Responsive Design**: Optimized for desktop, tablet, and mobile.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, CSS Modules.
- **Backend/Auth**: Firebase (Authentication & Firestore).
- **Animations**: Framer Motion.
- **Icons**: Lucide React.

## Deployment

### Local Development
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env.local` file with your Firebase credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```
4. Run the development server: `npm run dev`.

### Vercel Deployment
1. Connect your GitHub repository to Vercel.
2. Add the environment variables from `.env.local` to the Vercel project settings.
3. Deploy!

### GitHub Sharing
1. Create a new repository on GitHub.
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your_github_repo_url
   git push -u origin main
   ```

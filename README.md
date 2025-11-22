# Ragsites - AI Powered Website Template

A futuristic, high-performance Next.js website template featuring a RAG (Retrieval-Augmented Generation) chatbot powered by Google Gemini.

## Features

- **RAG Chatbot**: Answers business questions using `src/data/business_info.md` as a knowledge base.
- **Fast Rendering**: Optimized for Vercel free tier with minimal client-side hydration overhead.
- **Cool UI**: Prismatic color scheme, glassmorphism, and smooth animations.
- **Easy Customization**: Change the color scheme in `globals.css` and business data in `business_info.md`.

## Setup

1.  **Clone the repo**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure API Key**:
    - Create a `.env.local` file in the root directory.
    - Add your Gemini API key:
      ```
      GEMINI_API_KEY=your_actual_api_key_here
      ```
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## Customization

- **Business Data**: Edit `src/data/business_info.md` to change the knowledge base for the AI.
- **Colors**: Edit `src/app/globals.css` and modify the CSS variables under `:root`.
- **Pages**: Add or remove pages in `src/app/`.

## Deployment

Deploy to Vercel:
1.  Push to GitHub.
2.  Import project in Vercel.
3.  Add `GEMINI_API_KEY` in Vercel Project Settings > Environment Variables.
4.  Deploy!

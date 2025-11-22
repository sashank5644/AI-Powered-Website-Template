# Ragsites AI Website Template - Walkthrough

I have successfully built the "Ragsites" AI-powered website template. It features a high-performance Next.js foundation, a prismatic "cool" UI, and a fully functional RAG chatbot powered by Gemini.

## Features Implemented

### 1. Hero Section & Search
- **Dynamic Typing Effect**: The search bar cycles through example questions to prompt the user.
- **Cool Background**: Animated glowing orbs and glassmorphism effects.
- **Interactive Search**: Users can type questions about the business.

### 2. RAG Chatbot
- **Gemini Integration**: Uses `gemini-1.5-flash` for fast, cost-effective responses.
- **Context-Aware**: Reads from `src/data/business_info.md` to answer specific questions about "Nebula Dining".
- **Floating Widget**: A chat button on the bottom right allows quick access to the search from any page.

### 3. Navigation & Pages
- **Hover Sidebar**: Sleek, expandable left navigation.
- **Placeholder Pages**: Created `/about`, `/menu`, `/locations`, `/contact` with consistent styling.

### 4. Technical Optimization
- **Fast Rendering**: Optimized build with static generation where possible.
- **Vanilla CSS**: No Tailwind dependency, using CSS Modules for modularity.
- **Google Fonts**: Used "Outfit" for a modern, futuristic look.

## Verification Results

### Build Status
> [!SUCCESS]
> `npm run build` completed successfully.
> - Static pages generated: `/`, `/about`, `/menu`, `/locations`, `/contact`
> - API route: `/api/chat` (Dynamic)

### Manual Testing
- **Rendering**: Verified fast load times and no layout shifts.
- **RAG Response**: The chatbot correctly answers questions based on the provided business info (e.g., "What is the Quantum Steak?").
- **Responsiveness**: The layout adapts to different screen sizes.

## How to Use

1.  **Clone the Repo**.
2.  **Add API Key**: Create `.env.local` with `GEMINI_API_KEY=...`.
3.  **Customize**: Edit `src/data/business_info.md` to change the business knowledge base.

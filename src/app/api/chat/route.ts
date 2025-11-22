import { NextResponse } from 'next/server';
import { generateResponse } from '@/lib/gemini';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // Read business info
        const dataPath = path.join(process.cwd(), 'src', 'data', 'business_info.md');
        let businessInfo = '';

        try {
            businessInfo = fs.readFileSync(dataPath, 'utf-8');
        } catch (error) {
            console.error("Error reading business info:", error);
            businessInfo = "Error: Could not load business information.";
        }

        // Construct prompt for RAG
        const prompt = `
      You are a helpful and charismatic AI concierge for a business.
      Use the following business information to answer the user's question.
      If the answer is not in the information provided, politely say you don't know but offer to take their contact info.
      Keep answers concise and engaging.
      
      Business Information:
      ${businessInfo}
      
      User Question: ${message}
    `;

        const response = await generateResponse(prompt);

        return NextResponse.json({ response });
    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

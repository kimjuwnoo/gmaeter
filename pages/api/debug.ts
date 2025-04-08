import { experimental_streamText } from 'ai';
import { Groq } from 'groq-sdk';

export const runtime = 'edge'; // Edge 환경에서 실행 (빠름)

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Validate input
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid input: 'messages' should be a non-empty array");
    }

    // Ensure environment variable is set
    if (!process.env.GROQ_API_KEY) {
      throw new Error("Environment variable GROQ_API_KEY is not set");
    }

    const result = await experimental_streamText({
      model: 'llama3-70b-8192', // Groq에서 추천하는 모델
      messages,
      api: new Groq({ apiKey: process.env.GROQ_API_KEY! }),
    });

    return result.toAIStreamResponse();

  } catch (error) {
    console.error("Error in POST /api/debug:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

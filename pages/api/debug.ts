// ✅ pages/api/debug.ts
import { experimental_streamText } from 'ai';
import { Groq } from 'groq-sdk';

export const runtime = 'edge'; // Edge 환경에서 실행 (빠름)

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await experimental_streamText({
    model: 'llama3-70b-8192', // Groq에서 추천하는 모델
    messages,
    api: new Groq({ apiKey: process.env.GROQ_API_KEY! }),
  });

  return result.toAIStreamResponse();
}

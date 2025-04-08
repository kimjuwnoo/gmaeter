import { experimental_streamText } from 'ai';
import { Groq } from 'groq-sdk';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await experimental_streamText({
    model: 'llama3-70b-8192',
    messages,
    api: new Groq({ apiKey: process.env.GROQ_API_KEY! }),
  });

  return result.toAIStreamResponse();
}

import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://meusite.com',
    'X-Title': 'Chat Gemma com OpenRouter'
  }
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'google/gemma-3n-e4b-it:free',
    messages: [
      {
        role: 'user',
        content: 'dado que estou conversando com você por uma api, como é definido o "contexto" da conversa ou chat atual ?? como eu sei que estou mandando um prompt que você reconheça o prompt anterior ??'
      }
    ]
  });

  console.log(completion.choices[0].message.content);
}

main().catch(console.error);

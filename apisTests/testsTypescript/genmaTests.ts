import 'dotenv/config';
import OpenAI from 'openai';
import { promises as fs} from 'fs';
import promptConfig from './promptConfig';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://meusite.com',
    'X-Title': 'Chat Gemma com OpenRouter'
  }
});

async function main() {

  try{

    const promptContent = await fs.readFile('prompts/promptEx.txt', 'utf-8');

    const config = {
      ...promptConfig,
      messages: promptConfig.messages.map((message: any) => {
        if(message.content.includes('PLACEHOLDER_FOR_PROMPT')){
          return {
            ...message,
            content: promptContent
          };
        }
        return message;
      })
    };

    const inicio = Date.now();
    const completion = await openai.chat.completions.create(config);
    const fim = Date.now();

    
    console.log(completion.choices[0].message.content);
    console.log(`\nTempo de processamento: ${fim - inicio}ms`);
  }catch(e){
    console.log("Erro ao processar a requisição: ", e);
  }
}

main();

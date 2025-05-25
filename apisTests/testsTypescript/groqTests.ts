import 'dotenv/config';
import Groq from "groq-sdk";
import { promises as fs} from 'fs';
import promptConfig from './configs/promptGroqConfig';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main()
{
  try {
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
    const completion = await groq.chat.completions.create(config);
    const fim = Date.now();

    console.log(completion.choices[0]?.message?.content ?? "Nenhuma resposta");
    console.log(`\nTempo de processamento: ${fim - inicio}ms`);


  }catch(e){
    console.log("Erro ao processar a requisição: ", e);
  }
}

main();

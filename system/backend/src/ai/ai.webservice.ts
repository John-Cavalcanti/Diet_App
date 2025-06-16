import 'dotenv/config';
import { Groq } from 'groq-sdk';
import { Injectable } from '@nestjs/common';
import groqPromptConfig from './config/promptGroqConfig';

@Injectable()
export class AiWebService {
  
  constructor(private readonly groq: Groq) {}
  async getWeeklyDietGroq(prompt: string): Promise<any> {
    const promptContent = prompt;

    const config = {
      ...groqPromptConfig,
      messages: groqPromptConfig.messages.map((message: any) => {
        if(message.content.includes('PLACEHOLDER_FOR_PROMPT')){
          return {
            ...message,
            content: promptContent
          };
        }
        return message;
      })
    };

    return (await this.groq.chat.completions.create(config)).choices[0]?.message?.content ?? "Nenhuma resposta";
  }
}

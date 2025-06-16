import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { AiWebService } from './ai.webservice';
import * as path from 'path';

@Injectable()
export class AiService {

  constructor(
    private readonly aiWebService: AiWebService
  ){}
  async groqGenerateWeeklyDiet(user: any): Promise<any> {
    try{
      const promptPath = path.join(__dirname, 'prompts', 'diet-plan-prompt.txt');
      const template = await fs.readFile(promptPath, 'utf-8');
      const promptContent = this.interpolateTemplate(template, user);

      const generatedDiet = this.aiWebService.getWeeklyDietGroq(promptContent);
      
      return generatedDiet;

    }catch(e)
    {
      console.log("Erro ao processar a requisição: ", e);
    }
    
  }

  private interpolateTemplate(template: string, data: Record<string, any>): string {
    return template.replace(/{{(.*?)}}/g, (_, key) => {
      const trimmedKey = key.trim();
      return data[trimmedKey] !== undefined ? String(data[trimmedKey]) : '';
    });
  }
}

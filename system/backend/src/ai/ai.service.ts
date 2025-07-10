import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { AiWebService } from './ai.webservice';
import * as path from 'path';
import { UtilitariesService } from 'src/utilitaries/utilitaries.service';

@Injectable()
export class AiService {

  constructor(
    private readonly aiWebService: AiWebService,
    private readonly utilitariesService: UtilitariesService,
  ){}
  async groqGenerateWeeklyDiet(user: any): Promise<any> {
    try{
      const promptPath = path.join(__dirname, 'prompts', 'diet-plan-prompt.txt');
      const template = await fs.readFile(promptPath, 'utf-8');
      const promptContent = this.utilitariesService.interpolateTemplate(template, user);

      const generatedDiet = this.aiWebService.getWeeklyDietGroq(promptContent);
      
      return generatedDiet;

    }catch(e)
    {
      console.log("Erro ao processar a requisição: ", e);
    }
    
  }
}

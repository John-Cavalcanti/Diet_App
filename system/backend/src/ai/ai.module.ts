import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiWebService } from './ai.webservice';
import { Groq } from 'groq-sdk';
import { UtilitariesModule } from '../utilitaries/utilitaries.module';

const groqProvider = {
  provide: Groq,
  useFactory: () => {
    return new Groq({ apiKey: process.env.GROQ_API_KEY });
  },
};

@Module({
  providers: [AiService, AiWebService, groqProvider],
  exports: [AiService],
  imports: [UtilitariesModule],
})
export class AiModule {}

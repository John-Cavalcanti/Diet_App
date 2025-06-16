import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiWebService } from './ai.webservice';
import { Groq } from 'groq-sdk';

const groqProvider = {
  provide: Groq,
  useFactory: () => {
    return new Groq({ apiKey: process.env.GROQ_API_KEY });
  },
};

@Module({
  providers: [AiService, AiWebService, groqProvider],
  exports: [AiService],
})
export class AiModule {}

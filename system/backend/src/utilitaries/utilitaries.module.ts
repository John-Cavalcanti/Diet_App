import { Module } from '@nestjs/common';
import { UtilitariesService } from './utilitaries.service';

@Module({
  providers: [UtilitariesService],
  exports: [UtilitariesService],
})
export class UtilitariesModule {}

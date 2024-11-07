import { Module } from '@nestjs/common';
import { ChromaService } from './chroma.service';
import { ChromaController } from './chroma.controller';

@Module({
  providers: [ChromaService],
  controllers: [ChromaController]
})
export class ChromaModule {}

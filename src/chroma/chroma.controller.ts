import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ChromaService } from './chroma.service';

@Controller('documents')
export class ChromaController {
  constructor(private readonly chromaService: ChromaService) {}

  @Post()
  async storeDocument(
    @Body('text') text: string,
  ): Promise<{ message: string }> {
    await this.chromaService.storeDocument(text);
    return { message: 'Documento registrado exitosamente' };
  }

  @Get('search')
  async queryDocuments(@Query('query') query: string): Promise<any[]> {
    return this.chromaService.queryDocuments(query);
  }

  @Get('searchVector')
  async queryVector(@Query('query') query: string): Promise<any[]> {
    return this.chromaService.queryVector(query);
  }
}

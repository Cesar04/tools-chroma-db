import { Injectable } from '@nestjs/common';
import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama';

@Injectable()
export class ChromaService {
  private readonly chroma: Chroma;

  constructor() {
    const embeddings = new OllamaEmbeddings({ model: 'nomic-embed-text' });
    this.chroma = new Chroma(embeddings, { collectionName: 'rag' });
  }

  async storeDocument(text: string): Promise<void> {
    const document = {
      pageContent: text,
      metadata: { id: 'unique-id' }, // Genera un ID único según sea necesario
    };
    await this.chroma.addDocuments([document]);
  }

  async queryDocuments(query: string): Promise<any[]> {
    const vector = await this.chroma.embeddings.embedQuery(query);
    const results = await this.chroma.similaritySearchVectorWithScore(
      vector,
      2,
    );
    return results;
  }

  async queryVector(query: string): Promise<any[]> {
    const vector = await this.chroma.embeddings.embedQuery(query);   
    return vector;
  }
}

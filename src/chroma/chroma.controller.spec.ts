import { Test, TestingModule } from '@nestjs/testing';
import { ChromaController } from './chroma.controller';

describe('ChromaController', () => {
  let controller: ChromaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChromaController],
    }).compile();

    controller = module.get<ChromaController>(ChromaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

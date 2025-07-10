import { Test, TestingModule } from '@nestjs/testing';
import { UtilitariesService } from './utilitaries.service';

describe('UtilitariesService', () => {
  let service: UtilitariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilitariesService],
    }).compile();

    service = module.get<UtilitariesService>(UtilitariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Quando chamada a função encode', () => {
    it('deveria retornar um UpdateUserDto com a senha criptografada', async () => {
      const entryDto = {
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        password: 'SenhaForte2024',
        birthday: '1995-04-10',
        weight: 60,
        height: 167,
        workoutsFrequency: '5 vezes por semana',
        goals: 'Definir músculos e manter energia',
        foodRestrictions: 'Lactose, nozes',
        foodPreferences: 'Vegetariana, prefere pratos quentes no almoço',
      }
      const newDto = service.encode(entryDto)
      expect((await newDto).password).
    });
  });

});

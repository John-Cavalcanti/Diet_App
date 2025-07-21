/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { WeeklyDietController } from '../../src/weekly-diet/weekly-diet.controller';
import { WeeklyDietService } from '../../src/weekly-diet/weekly-diet.service';
import { weeklyDietExample } from '../weeklydietconstants/constants/constants';
import { AuthGuard } from '../../src/auth/auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { WeeklyDiet } from '../../src/weekly-diet/entities/weekly-diet.entity';
import { BadRequestException } from '@nestjs/common';

describe('WeeklyDietController', () => {
  let controller: WeeklyDietController;

  const mockWeeklyDietService = {
    create: jest.fn().mockResolvedValue(new WeeklyDiet(1, weeklyDietExample)),

    findWeeklyDietByUserId: jest.fn().mockResolvedValue(weeklyDietExample),
  };

  const mockAuthGuard = {};
  const mockJwtService = {};
  const mockConfigService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeeklyDietController],
      providers: [WeeklyDietService, AuthGuard, ConfigService, JwtService],
    })
      .overrideProvider(WeeklyDietService)
      .useValue(mockWeeklyDietService)

      .overrideProvider(ConfigService)
      .useValue(mockConfigService)

      .overrideProvider(JwtService)
      .useValue(mockJwtService)

      .overrideProvider(AuthGuard)
      .useValue(mockAuthGuard)

      .compile();

    controller = module.get<WeeklyDietController>(WeeklyDietController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Quando houver uma tentativa de criação de novo plano alimentar', () => {
    it('deveria retornar uma instância de Weekly Diet caso seja bem-sucedida', async () => {
      const SuccessResult = await controller.create({ userId: 1 });
      expect(SuccessResult).toBeInstanceOf(WeeklyDiet);
    });
    
    it('deveria retornar um erro de BadRequest caso tente criar plano alimentar para usuário inexistente', async () => {
      mockWeeklyDietService.create.mockImplementationOnce( async () => {
        throw new BadRequestException('User not found');
      });
      await expect(controller.create( { userId: 123414141 } )).rejects.toThrow(BadRequestException);
    });
  
    it('deveria retornar internal server error caso a resposta da IA não seja em forma JSON válido', async () => {
      mockWeeklyDietService.create.mockImplementationOnce(async () => {
        throw new Error;
      });
      await expect(controller.create({ userId: 1 })).rejects.toThrow(Error);
    });
  });

  describe('Quando houver uma tentativa de acesso ao plano alimentar de um usuário', () => {
    it('deveria retornar um Objeto descrevendo todas as refeições do usuário do Token caso o Token seja válido', async () => {
      expect(controller.findWeeklyDietByUserId(
        {
          user: {
            sub: 1,
            email: 'fernanda.oliveira@example.com',
            iat: 1751507817,
            exp: 1751511417,
          }
        }
      )).toBeDefined();
    });
 
    it('deveria retornar um BadRequest caso o Token não seja válido', async () => {
      mockWeeklyDietService.findWeeklyDietByUserId.mockImplementationOnce(async () => {
        throw new BadRequestException(
          'Esse plano alimentar não existe no banco de dados',
        );
      });
      await expect(controller.findWeeklyDietByUserId(
        {
          user: {
            sub: 1,
            email: 'fernanda.oliveira@example.com',
            iat: 1751507817,
            exp: 1751511417,
          }
        }
      )).rejects.toThrow(BadRequestException);
    });
  });
});

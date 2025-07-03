/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { BadRequestException, ConflictException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
          signUp: jest.fn().mockImplementation((dto) => {
            return new User({
              id: 1,
              ...dto,
            });
          }),
        };
  const mockAuthGuard = {};
  const mockJwtService = {};
  const mockConfigService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, AuthGuard, JwtService, ConfigService],
    })
    .overrideProvider(AuthGuard)
    .useValue(mockAuthGuard)
    
    .overrideProvider(JwtService)
    .useValue(mockJwtService)

    .overrideProvider(ConfigService)
    .useValue(mockConfigService)

    .overrideProvider(AuthService)
    .useValue(mockAuthService)
    .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('deve cadastrar um usuário com sucesso', async () => {
    expect( await controller.signUp(
      {
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        password: 'SenhaForte2024',
        birthday: '1995-04-10',
        weight: 60,
        height: 167,
        workoutsFrequency: '5 vezes por semana',
        goals: 'Definir músculos e manter energia',
        foodRestrictions: 'Lactose, nozes',
        foodPreferences: 'Vegetariana, prefere pratos quentes no almoço'
      }
    )).toBeInstanceOf(User)
  });

  it('deve emitir conflict error', async () => {
    mockAuthService.signUp.mockImplementationOnce( async () => {
      throw new ConflictException('Email já está em uso.');
    });
    
    await expect(controller.signUp(
      {
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        password: 'SenhaForte2024',
        birthday: '1995-04-10',
        weight: 60,
        height: 167,
        workoutsFrequency: '5 vezes por semana',
        goals: 'Definir músculos e manter energia',
        foodRestrictions: 'Lactose, nozes',
        foodPreferences: 'Vegetariana, prefere pratos quentes no almoço'
      }
    )).rejects.toThrow(ConflictException)
  });

  it('deve emitir bad request error', async () => {
    mockAuthService.signUp.mockImplementationOnce( async () => {
      throw new BadRequestException();
    });
    
    await expect(controller.signUp(
      {
        name: 'Fernanda Oliveira',
        email: 'fernanda.oliveira@example.com',
        password: 'SenhaForte2024',
        birthday: '1995-04-10',
        weight: 60,
        height: 167,
        workoutsFrequency: '5 vezes por semana',
        goals: 'Definir músculos e manter energia',
        foodRestrictions: 'Lactose, nozes',
        foodPreferences: 'Vegetariana, prefere pratos quentes no almoço' 
      }
    )).rejects.toThrow(BadRequestException)
  });

});

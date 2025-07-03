/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { BadRequestException, ConflictException, Request, UnauthorizedException } from '@nestjs/common';
import { rejects } from 'assert';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
          signUp: jest.fn().mockImplementation((dto) => {
            return new User({
              id: 1,
              ...dto,
            });
          }),
          logIn: jest.fn().mockImplementation(() => {
            return {
              acess_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZmVybmFuZGEub2xpdmVpcmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTEyMDk0NzgsImV4cCI6MTc1MTIxMzA3OH0.TN48QRk_GHKb6R1yqbXpgy05osvc3pKoMaVyNTNuoRs',
            };
          }), 
          profile: jest.fn().mockImplementation(() => {
            return {
              sub: 1,
              email: 'fernanda.oliveira@example.com',
              iat: 1751212858,
              exp: 1751216458,
            }
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
  
  describe('POST /signup', () => {
    describe('Quando os dados são válidos', () => { 
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
    });

    describe('Quando cliente tentar criar uma conta com email já existente', () => {
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
    });

    describe('Quando cliente tentar criar conta com tipos de dados não válidos', () => {
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
  });

  describe('POST /logIn', () => {
    describe('Quando cliente acessar com email e senha válidos', () => {
      it('deve retornar um token de acesso', async () => {
        expect(controller.logIn(
          {
            email: 'fernanda.oliveira@example.com',
            password: 'SenhaForte2024',
          }
        )).toBeDefined()
      });
    });
  
    describe('Quando cliente usa tipos de dados não permitidos', () => {
      it('deve emitir bad request error', async () => {
        mockAuthService.logIn.mockImplementationOnce( async () => {
          throw new BadRequestException();
        })
        await expect(controller.logIn(
          {
            email: 'fernanda.oliveira@example.com',
            password: 'SenhaForte2024', // passar ao inves de string com senha, um number, por exemplo
          }
        )).rejects.toThrow(BadRequestException)
      });
    });
    
    describe('Quando cliente passa informações incorretas, seja email ou senha', () => {
      it('deveria emitir unauthorized error', async () => {
        mockAuthService.logIn.mockImplementationOnce( async () => {
          throw new UnauthorizedException();
        })
        await expect(controller.logIn(
          {
            email: 'fernanda.oliveira@example.com',
            password: 'SenhaForte2024',
          }
        )).rejects.toThrow(UnauthorizedException)
      });
    });
  });

  describe('GET', () => {
    describe('Quando o usuário possui o token de acesso na header', () => {
      it('deveria retornar o payload do usuário', () => {
        expect(controller.getProfile(
          {
            user: {
              sub: 1,
              email: 'fernanda.oliveira@example.com',
              iat: 1751507817,
              exp: 1751511417,
            }
          }
        )).toBeDefined()
      });
    });
  });

});

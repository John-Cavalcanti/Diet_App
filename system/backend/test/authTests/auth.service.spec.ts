jest.mock('bcryptjs', () => ({
  compare: jest.fn(() => Promise.resolve(true)),
  hash: jest.fn(() => Promise.resolve('hashed-password')),
}));

import { UtilitariesService } from '../../src/utilitaries/utilitaries.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../src/auth/auth.service';
import {
  mockEncryptedPassword,
  mockGetToken,
  mockLogInAccessToken,
} from './constants/constants';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../src/users/users.service';
import { User } from '../../src/users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  const mockJwtService = {
    signAsync: jest.fn().mockResolvedValue(mockGetToken),
  };

  const mockUsersService = {
    findByEmail: jest.fn().mockReturnValue(
      new User({
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
      }),
    ),

    create: jest.fn().mockReturnValue(
      new User({
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
      }),
    ),
  };

  const mockUtilitariesService = {
    encode: jest.fn().mockResolvedValue(mockEncryptedPassword),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, UsersService, UtilitariesService],
    })
      .overrideProvider(JwtService)
      .useValue(mockJwtService)

      .overrideProvider(UsersService)
      .useValue(mockUsersService)

      .overrideProvider(UtilitariesService)
      .useValue(mockUtilitariesService)

      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Quando a função signup for chamada', () => {
    it('deveria retornar um token Jwt se bem sucedido', async () => {
      mockUsersService.findByEmail.mockReturnValueOnce(undefined);

      await expect(
        service.signUp({
          name: 'Carlos Mendes',
          email: 'carlos.mendes@example.com',
          password: 'SenhaForte123',
          birthday: '1986-11-15',
          weight: 85.5,
          height: 178,
          workoutsFrequency: '3 vezes por semana',
          goals: 'Perder peso e ganhar resistência',
          foodRestrictions: '',
          foodPreferences: 'Prefere comidas caseiras e evita frituras',
        }),
      ).resolves.toEqual(mockLogInAccessToken);
    });

    it('deveria emitir conflict error se o email já existe', async () => {
      await expect(
        service.signUp({
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
        }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('Quando a função login for acionada', () => {
    it('deveria retornar o token de acesso quando as informações forem corretas', async () => {
      expect(
        await service.logIn({
          email: 'fernanda.oliveira@example.com',
          password: 'SenhaForte2024',
        }),
      ).toBeDefined();
    });

    it('deveria emitir unauthorized error por ter usuário indefinido', async () => {
      mockUsersService.findByEmail.mockReturnValueOnce(undefined);
      await expect(
        service.logIn({
          email: 'fernanda.oliveira@example.com',
          password: 'SenhaForte2024',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('deveria emitir unauthorized error por ter senha errada', async () => {
      (bcrypt.compare as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve(false),
      );

      await expect(
        service.logIn({
          email: 'fernanda.oliveira@example.com',
          password: 'SenhaErrada2024',
        }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});

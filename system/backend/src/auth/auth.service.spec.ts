jest.mock('bcryptjs', () => ({
  compare: jest.fn(() => Promise.resolve(true)),
  hash: jest.fn(() => Promise.resolve('hashed-password')),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { mockLogInAccessToken } from './constants/constants';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { ConflictException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  const mockJwtService = {
    signAsync: jest.fn().mockResolvedValue(mockLogInAccessToken),
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

  const mockBcrypt = {
    compare: jest.fn().mockReturnValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService, UsersService],
    })
      .overrideProvider(JwtService)
      .useValue(mockJwtService)

      .overrideProvider(UsersService)
      .useValue(mockUsersService)

      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Quando o cliente tentar fazer o signup', () => {
    it('deveria retornar um instancia de User', async () => {
      mockUsersService.findByEmail.mockReturnValueOnce(undefined);

      expect(
        await service.signUp({
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
      ).toBeInstanceOf(User);
    });

    it('deveria emitir conflict error', async () => {
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

  describe('Quando o cliente tentar fazer o login', () => {
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

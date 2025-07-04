/* eslint-disable prettier/prettier */
import { TestingModule, Test } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { createMock } from '@golevelup/ts-jest';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { mockGetJWTSECRET, mockAuthorizationHeader } from './constants/constants';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const mockConfigService = {
    get: jest.fn().mockImplementation(() => {
      return mockGetJWTSECRET; // essa jwt secret é falsa
    })
  };
  const mockJwtService = {
    verifyAsync: jest.fn().mockResolvedValue({
      sub: 1,
	    email: 'fernanda.oliveira@example.com',
	    iat: 1751546076,
	    exp: 1751549676,
    })
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtService, ConfigService, AuthGuard],
    })
    .overrideProvider(JwtService)
    .useValue(mockJwtService)

    .overrideProvider(ConfigService)
    .useValue(mockConfigService)
    .compile()

    guard = module.get<AuthGuard>(AuthGuard);
  })
  
  
  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('Quando é necessário a autenticação de um token', () => {
    it('deveria retornar true', async () => {
      const context = createMock<ExecutionContext>();
      context.switchToHttp().getRequest.mockReturnValue({
        headers: {
          authorization: mockAuthorizationHeader,
        },
      });
      
      expect(await guard.canActivate(context)).toBeTruthy()
    });
  

    it('deveria retornar unauthorized error', async () => {
      const context = createMock<ExecutionContext>();
      context.switchToHttp().getRequest.mockReturnValue({
        headers: {
          authorization: 'Token claramente inválido',
        },
      });
      
      await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException)
    });
  });

});

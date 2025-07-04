/* eslint-disable prettier/prettier */
import { TestingModule, Test } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { createMock } from '@golevelup/ts-jest';
import { ConfigService } from '@nestjs/config';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const mockConfigService = {
    get: jest.fn().mockImplementation(() => {
      return 'aa1c449ffad844d25049e737e0bd41c487f4e3ea6f57e163b74e4a41b77b55a5'; // essa jwt secret é falsa
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
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiZmVybmFuZGEub2xpdmVpcmFAZXhhbXBsZS5jb20iLCJpYXQiOjE3NTE1OTc2MjksImV4cCI6MTc1MTYwMTIyOX0.ACKa7l_yuEgVr8AC1J7_oiYf-k23wumrymMs4cRyx2o',
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

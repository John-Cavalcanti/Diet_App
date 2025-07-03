/* eslint-disable prettier/prettier */
import { TestingModule, Test } from '@nestjs/testing';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  const mockConfigService = {
    canActivate: jest.fn().mockImplementation(() => {
      return 'aa1c449ffad844d25049e737e0bd41c487f4e3ea6f57e163b74e4a41b77b55a5'; // essa jwt secret é falsa
    })
  };
  const mockJwtService = {
    canActivate: jest.fn().mockReturnValue({
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
      expect(guard.canActivate(
        
      ))
    })
  });



});

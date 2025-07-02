import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {};
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
});

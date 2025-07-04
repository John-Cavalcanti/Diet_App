import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { mockLogInAccessToken } from './constants/constants';

describe('AuthService', () => {
  let service: AuthService;

  const mockJwtService = {
    verifyAsync: jest.fn().mockResolvedValue(mockLogInAccessToken),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

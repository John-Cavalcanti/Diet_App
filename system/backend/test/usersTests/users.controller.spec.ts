import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../src/users/users.controller';
import { UsersService } from '../../src/users/users.service';
import { AuthGuard } from '../../src/auth/auth.guard';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../src/users/entities/user.entity';

describe('UsersController', () => {
  let controller: UsersController;

  const mockAuthGuard = {};
  const mockJwtService = {};
  const mockConfigService = {};

  const mockUserService = {
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

    findOne: jest.fn().mockReturnValue({
      _id: 1,
      _name: 'Fernanda Oliveira',
      _email: 'fernanda.oliveira@example.com',
      _birthday: '1995-04-10T00:00:00.000Z',
      _weight: 60,
      _height: 167,
      _password: 'SenhaEncriptada123',
      _workoutsFrequency: '5 vezes por semana',
      _goals: 'Definir músculos e manter energia',
      _foodRestrictions: 'Lactose, nozes',
      _foodPreferences: 'Vegetariana, prefere pratos quentes no almoço',
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, AuthGuard, ConfigService, JwtService],
    })
      .overrideProvider(ConfigService)
      .useValue(mockConfigService)

      .overrideProvider(JwtService)
      .useValue(mockJwtService)

      .overrideProvider(AuthGuard)
      .useValue(mockAuthGuard)

      .overrideProvider(UsersService)
      .useValue(mockUserService)

      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('POST/ users', () => {
    it('deveria retornar uma instância de User caso o Dto seja válido', () => {
      expect(
        controller.create({
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
      ).toBeInstanceOf(User);
    });
  });

  describe('GET /users/me', () => {
    it('deveria retornar as informações do perfil do usuário ligado ao Token', () => {
      expect(
        controller.findOne({
          user: {
            sub: 1,
            email: 'fernanda.oliveira@example.com',
            iat: 1751507817,
            exp: 1751511417,
          },
        }),
      ).toBeDefined();
      expect(mockUserService.findOne).toHaveBeenCalledWith(1);
    });
  });
});

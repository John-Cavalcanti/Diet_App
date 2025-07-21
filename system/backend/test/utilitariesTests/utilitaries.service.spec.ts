import { Test, TestingModule } from '@nestjs/testing';
import { UtilitariesService } from '../../src/utilitaries/utilitaries.service';
import { UpdateUserDto } from '../../src/users/dto/update-user.dto';
import { validUserDto, validSecondUserDto } from '../utilitariesconstants/constants/constants';
import { User } from '../../src/users/entities/user.entity';

describe('UtilitariesService', () => {
  let service: UtilitariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilitariesService],
    }).compile();

    service = module.get<UtilitariesService>(UtilitariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Quando chamada a função encode', () => {
    it('deveria retornar um Object com a senha criptografada', async () => {
      const entryDto: UpdateUserDto = validUserDto;
      const newDto = await service.encode(entryDto);
      expect(newDto.password.slice(0, 2)).toEqual('$2'); // as senha criptografadas sempre começam com $2
      expect(newDto).toBeInstanceOf(Object);
    });
  });

  describe('Quando chamada a função emailCheck', () => {
    it('deveria retornar true (emails correspondem)', async () => {
      const user = new User(validUserDto);
      const dto = validUserDto;
      expect(await service.emailCheckUpdate(dto, user)).toBeTruthy();
    });

    it('deveria retornar false (emails não correspondem)', async () => {
      const user = new User(validSecondUserDto);
      const dto = validUserDto;
      expect(await service.emailCheckUpdate(dto, user)).toBeFalsy();
    });
  });

  describe('Quando chamada a função checkAge', () => {
    it('deveria retornar a idade correta (aniversário já ocorreu no ano corrente)', () => {
      const birthday = validUserDto.birthday;
      const userAge = service.calculateAge(birthday);
      expect(userAge).toEqual(30);
    });

    it('deveria retornar a idade correta (aniversário ainda não ocorreu no ano corrente', () => {
      const birthday = validSecondUserDto.birthday;
      const userAge = service.calculateAge(birthday);
      expect(userAge).toEqual(38);
    });
  });

  // TODO: imterpolateTemplate
});

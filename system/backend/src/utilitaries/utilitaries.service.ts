import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UtilitariesService {
  async encode(
    dto: UpdateUserDto | SignUpDto,
  ): Promise<UpdateUserDto | CreateUserDto> {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);
    const newDto: UpdateUserDto | CreateUserDto = {
      ...dto,
      password: hashedPassword,
    };
    return newDto;
  }
}

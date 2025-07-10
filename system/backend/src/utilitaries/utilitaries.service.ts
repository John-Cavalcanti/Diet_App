import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';

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

  async emailCheckUpdate(dto: UpdateUserDto, user: User): Promise<boolean> {
    if (user.getEmail() != dto.email) {
      return false;
    }
    return true;
  }

  calculateAge(birthday: string | Date): number {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  interpolateTemplate(template: string, data: Record<string, any>): string {
    return template.replace(/{{(.*?)}}/g, (_, key) => {
      const trimmedKey = key.trim();
      return data[trimmedKey] !== undefined ? String(data[trimmedKey]) : '';
    });
  }
}

import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UtilitariesService {
  async encode(dto: UpdateUserDto | SignUpDto) {
    const hashedPassword: string = await bcrypt.hash(dto.password, 10);
    const newDto = {
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

  transformObject(userObj) {
    const userData = {
      age: this.calculateAge(userObj.birthday),
      weigth: userObj.weight,
      height: userObj.height,
      workouts: userObj.workoutsFrequency,
      objetivo: userObj.goals,
      restricoes: userObj.foodRestrictions,
      alimentosFavoritos: userObj.foodPreferences,
    };
    return userData;
  }
}

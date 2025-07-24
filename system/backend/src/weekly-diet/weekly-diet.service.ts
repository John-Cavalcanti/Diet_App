import { AiService } from './../ai/ai.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UpdateWeeklyDietDto } from './dto/update-weekly-diet.dto';
import { UsersService } from '../users/users.service';
import { WeeklyDiet } from './entities/weekly-diet.entity';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { InternalServerError } from 'groq-sdk';

@Injectable()
export class WeeklyDietService {
  constructor(
    private readonly aiService: AiService,
    private readonly usersService: UsersService,
    private readonly weeklyDietRepository: WeeklyDietRepository,
  ) {}

  async create(createWeeklyDietDto: CreateWeeklyDietDto): Promise<WeeklyDiet> {
    const user = await this.usersService.findOne(createWeeklyDietDto.userId);
    let userObj: any;

    if (!user) {
      throw new BadRequestException('User not found');
    } else {
      userObj = user.toObject();
    }

    const userData = {
      age: this.calculateAge(userObj.birthday),
      weigth: userObj.weight,
      height: userObj.height,
      workouts: userObj.workoutsFrequency,
      objetivo: userObj.goals,
      restricoes: userObj.foodRestrictions,
      alimentosFavoritos: userObj.foodPreferences,
    };

    const aiResponse = await this.aiService.groqGenerateWeeklyDiet(userData);

    let content = aiResponse ?? "Nenhuma resposta";

    content = content.replace(/```json|```/g, '').trim();

    try {
      const parsed = JSON.parse(content);
      const weeklyDiet = new WeeklyDiet(createWeeklyDietDto.userId, parsed.planoAlimentarSemanal);
      return this.weeklyDietRepository.createDiet(weeklyDiet);
    } catch (err) {
      console.error('Erro ao fazer parse da resposta da IA:', err);
      console.error('Conteúdo bruto:', content);
      throw new InternalServerError(500, err, 'Erro ao fazer parse da resposta da IA', content);
    }
  }

  private calculateAge(birthday: string | Date): number {
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

  async findAll(): Promise<WeeklyDiet[]> {
    return  await this.weeklyDietRepository.findAll();
  }

  async findWeeklyDietByUserId(id: number): Promise<WeeklyDiet> {
    const diet = await this.weeklyDietRepository.findWeeklyDietByUserId(id);
    if (!diet) {
      throw new BadRequestException(
        'Esse plano alimentar não existe no banco de dados',
      );
    }
    return diet;
  }

  update(id: number, updateWeeklyDietDto: UpdateWeeklyDietDto) {
    return 'This action updates a #${id} weeklyDiet';
  }

  remove(id: number) {
    return 'This action removes a #${id} weeklyDiet';
  }
}

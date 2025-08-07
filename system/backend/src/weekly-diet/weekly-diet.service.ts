import { AiService } from './../ai/ai.service';
import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UsersService } from '../users/users.service';
import { WeeklyDiet } from './entities/weekly-diet.entity';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { InternalServerError } from 'groq-sdk';
import { UtilitariesService } from '../utilitaries/utilitaries.service';

@Injectable()
export class WeeklyDietService {
  constructor(
    private readonly aiService: AiService,
    private readonly usersService: UsersService,
    private readonly weeklyDietRepository: WeeklyDietRepository,
    private readonly utilitariesService: UtilitariesService,
  ) {}

  async create(createWeeklyDietDto: CreateWeeklyDietDto): Promise<WeeklyDiet> {
    const user = await this.usersService.findOne(createWeeklyDietDto.userId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const userObj = user.toObject();

    const userData = this.utilitariesService.transformObject(userObj);

    const aiResponse = await this.aiService.groqGenerateWeeklyDiet(userData);

    let content = aiResponse ?? "Nenhuma resposta";

    console.log(content);
    if (content === 'Nenhuma resposta') {
      throw new InternalServerErrorException();
    }

    content = content.replace(/```json|```/g, '').trim();

    try {
      const parsed = JSON.parse(content);
      const weeklyDiet = new WeeklyDiet(createWeeklyDietDto.userId, parsed.planoAlimentarSemanal);
      return this.weeklyDietRepository.createDiet(weeklyDiet);
    } catch (err) {
      throw new InternalServerError(500, err, 'Erro ao fazer parse da resposta da IA', content);
    }
  }

  async findAll(): Promise<WeeklyDiet[]> {
    return  await this.weeklyDietRepository.findAll();
  }

  async findWeeklyDietByUserId(id: number): Promise<WeeklyDiet> {
    const diet = await this.weeklyDietRepository.findWeeklyDietByUserId(id);
    if (!diet) {
      throw new BadRequestException(
        'Não há planos alimentares ligados a esse usuário.',
      );
    }
    return diet;
  }
}

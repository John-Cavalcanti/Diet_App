import { MealsService } from './../meals/meals.service';
import { AiService } from './../ai/ai.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UpdateWeeklyDietDto } from './dto/update-weekly-diet.dto';
import { UsersService } from '../users/users.service';
import { WeeklyDiet } from './entities/weekly-diet.entity';
import { WeeklyDietRepository } from './weekly-diet.repository';
import { BadRequestException } from '@nestjs/common';
import { UtilitariesService } from 'src/utilitaries/utilitaries.service';

@Injectable()
export class WeeklyDietService {
  constructor(
    private readonly aiService: AiService,
    private readonly mealsService: MealsService,
    private readonly usersService: UsersService,
    private readonly weeklyDietRepository: WeeklyDietRepository,
    private readonly utilitariesService: UtilitariesService,
  ) {}

  async create(createWeeklyDietDto: CreateWeeklyDietDto) {
    const user = this.usersService.findOne(createWeeklyDietDto.userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const userObj = user.toObject();

    const userData = this.utilitariesService.transformObject(userObj);

    const aiResponse = await this.aiService.groqGenerateWeeklyDiet(userData);

    let content = aiResponse ?? "Nenhuma resposta";
    if (content === 'Nenhuma resposta') {
      throw new InternalServerErrorException();
    }

    content = content.replace(/```json|```/g, '').trim();

    try {
      const parsed = JSON.parse(content);
      const weeklyDiet = new WeeklyDiet(createWeeklyDietDto.userId, parsed.planoAlimentarSemanal);
      this.weeklyDietRepository.createDiet(weeklyDiet);
      return parsed.planoAlimentarSemanal; // ou return parsed se quiser tudo
    } catch (err) {
      console.error('Erro ao fazer parse da resposta da IA:', err);
      console.error('Conteúdo bruto:', content);
      throw new InternalServerErrorException(
        'Resposta da IA não está em formato JSON válido.',
      );
    }
  }

  findAll() {
    return 'This action returns all weeklyDiet';
  }

  async findWeeklyDietByUserId(id: number) {
    const dietsArray = await this.weeklyDietRepository.findWeeklyDietByUserId(id);
    if (!dietsArray.length) {
      throw new BadRequestException(
        'Não há planos alimentares ligados a esse usuário.',
      );
    }
    return dietsArray;
  }

  update(id: number, updateWeeklyDietDto: UpdateWeeklyDietDto) {
    return 'This action updates a #${id} weeklyDiet';
  }

  remove(id: number) {
    return 'This action removes a #${id} weeklyDiet';
  }
}

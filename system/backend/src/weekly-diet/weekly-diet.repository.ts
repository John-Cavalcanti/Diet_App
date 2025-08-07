/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { WeeklyDiet } from './entities/weekly-diet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WeeklyDietRepository {
  // private id = 0;
  // private readonly weeklyDiets: WeeklyDiet[] = [];

  constructor(
    @InjectRepository(WeeklyDiet)
    private readonly weeklyDietRepository: Repository<WeeklyDiet> 
  ) {}


  async createDiet(WeeklyDiet: WeeklyDiet): Promise<WeeklyDiet>
  {
    try{
      return await this.weeklyDietRepository.save(WeeklyDiet);
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to create weekly diet: ', e);
    }
  }

  async findWeeklyDietByUserId(id: number) {
    try{
      return await this.weeklyDietRepository.findOne({where: {userId: id}});
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to find weekly diet by user id: ', e);
    }
    
  }

  async findAll() {
    try{
      return await this.weeklyDietRepository.find();
    }catch(e)
    {
      throw new InternalServerErrorException('Failed to find all weekly diets: ', e);
    }
  }

  /*
  findWeeklyDietByUserId(id: number) {
    return this.weeklyDiets.find(diet => diet.getId() === id);
  }*/
}

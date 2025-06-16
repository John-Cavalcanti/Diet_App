import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeeklyDietService } from './weekly-diet.service';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UpdateWeeklyDietDto } from './dto/update-weekly-diet.dto';

@Controller('weekly-diet')
export class WeeklyDietController {
  constructor(private readonly weeklyDietService: WeeklyDietService) {}

  @Post()
  create(@Body() createWeeklyDietDto: CreateWeeklyDietDto) {
    return this.weeklyDietService.create(createWeeklyDietDto);
  }

  @Get()
  findAll() {
    return this.weeklyDietService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weeklyDietService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeeklyDietDto: UpdateWeeklyDietDto) {
    return this.weeklyDietService.update(+id, updateWeeklyDietDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weeklyDietService.remove(+id);
  }
}

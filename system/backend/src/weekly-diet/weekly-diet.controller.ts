import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WeeklyDietService } from './weekly-diet.service';
import { CreateWeeklyDietDto } from './dto/create-weekly-diet.dto';
import { UpdateWeeklyDietDto } from './dto/update-weekly-diet.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from '@nestjs/common';
import { WeeklyDietDocsCreate } from './decorators/weeklydiet-swagger-create.decorators';
import { WeeklyDietDocsFindOne } from './decorators/weeklydiet-swagger-findone.decorators';

@Controller('weekly-diet')
export class WeeklyDietController {
  constructor(private readonly weeklyDietService: WeeklyDietService) {}

  @WeeklyDietDocsCreate()
  @Post()
  create(@Body() createWeeklyDietDto: CreateWeeklyDietDto) {
    return this.weeklyDietService.create(createWeeklyDietDto);
  }

  @Get()
  findAll() {
    return this.weeklyDietService.findAll();
  }

  @WeeklyDietDocsFindOne()
  @UseGuards(AuthGuard)
  @Get('me')
  findWeeklyDietByUserId(@Request() req) {
    return this.weeklyDietService.findWeeklyDietByUserId(req.user.sub); // extrai o id do payload
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

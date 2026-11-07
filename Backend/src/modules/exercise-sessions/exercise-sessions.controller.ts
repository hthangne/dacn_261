import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseSessionsService } from './exercise-sessions.service.js';
import { CreateExerciseSessionDto } from './dto/create-exercise-session.dto.js';
import { UpdateExerciseSessionDto } from './dto/update-exercise-session.dto.js';

@Controller('exercise-sessions')
export class ExerciseSessionsController {
  constructor(private readonly exerciseSessionsService: ExerciseSessionsService) {}

  @Post()
  create(@Body() createExerciseSessionDto: CreateExerciseSessionDto) {
    return this.exerciseSessionsService.create(createExerciseSessionDto);
  }

  @Get()
  findAll() {
    return this.exerciseSessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseSessionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseSessionDto: UpdateExerciseSessionDto) {
    return this.exerciseSessionsService.update(+id, updateExerciseSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseSessionsService.remove(+id);
  }
}

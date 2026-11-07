import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciseLogsService } from './exercise-logs.service.js';
import { CreateExerciseLogDto } from './dto/create-exercise-log.dto.js';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto.js';

@Controller('exercise-logs')
export class ExerciseLogsController {
  constructor(private readonly exerciseLogsService: ExerciseLogsService) {}

  @Post()
  create(@Body() createExerciseLogDto: CreateExerciseLogDto) {
    return this.exerciseLogsService.create(createExerciseLogDto);
  }

  @Get()
  findAll() {
    return this.exerciseLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseLogDto: UpdateExerciseLogDto) {
    return this.exerciseLogsService.update(+id, updateExerciseLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseLogsService.remove(+id);
  }
}

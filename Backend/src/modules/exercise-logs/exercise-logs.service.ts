import { Injectable } from '@nestjs/common';
import { CreateExerciseLogDto } from './dto/create-exercise-log.dto.js';
import { UpdateExerciseLogDto } from './dto/update-exercise-log.dto.js';

@Injectable()
export class ExerciseLogsService {
  create(createExerciseLogDto: CreateExerciseLogDto) {
    return 'This action adds a new exerciseLog';
  }

  findAll() {
    return `This action returns all exerciseLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseLog`;
  }

  update(id: number, updateExerciseLogDto: UpdateExerciseLogDto) {
    return `This action updates a #${id} exerciseLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseLog`;
  }
}

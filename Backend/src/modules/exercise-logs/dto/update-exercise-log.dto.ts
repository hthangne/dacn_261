import { PartialType } from '@nestjs/swagger';
import { CreateExerciseLogDto } from './create-exercise-log.dto.js';

export class UpdateExerciseLogDto extends PartialType(CreateExerciseLogDto) {}

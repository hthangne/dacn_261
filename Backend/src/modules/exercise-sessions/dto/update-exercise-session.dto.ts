import { PartialType } from '@nestjs/swagger';
import { CreateExerciseSessionDto } from './create-exercise-session.dto.js';

export class UpdateExerciseSessionDto extends PartialType(CreateExerciseSessionDto) {}

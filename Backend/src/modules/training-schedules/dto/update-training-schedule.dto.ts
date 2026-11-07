import { PartialType } from '@nestjs/swagger';
import { CreateTrainingScheduleDto } from './create-training-schedule.dto.js';

export class UpdateTrainingScheduleDto extends PartialType(CreateTrainingScheduleDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateConsultationDto } from './create-consultation.dto.js';

export class UpdateConsultationDto extends PartialType(CreateConsultationDto) {}

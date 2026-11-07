import { PartialType } from '@nestjs/swagger';
import { CreateConsultationMessageDto } from './create-consultation-message.dto.js';

export class UpdateConsultationMessageDto extends PartialType(CreateConsultationMessageDto) {}

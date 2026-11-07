import { PartialType } from '@nestjs/swagger';
import { CreateHealthRecordDto } from './create-health-record.dto.js';

export class UpdateHealthRecordDto extends PartialType(CreateHealthRecordDto) {}

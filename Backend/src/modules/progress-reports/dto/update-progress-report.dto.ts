import { PartialType } from '@nestjs/swagger';
import { CreateProgressReportDto } from './create-progress-report.dto.js';

export class UpdateProgressReportDto extends PartialType(CreateProgressReportDto) {}

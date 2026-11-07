import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentPlanHistoryDto } from './create-treatment-plan-history.dto.js';

export class UpdateTreatmentPlanHistoryDto extends PartialType(CreateTreatmentPlanHistoryDto) {}

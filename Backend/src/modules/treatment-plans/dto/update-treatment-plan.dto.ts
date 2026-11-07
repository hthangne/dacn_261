import { PartialType } from '@nestjs/swagger';
import { CreateTreatmentPlanDto } from './create-treatment-plan.dto.js';

export class UpdateTreatmentPlanDto extends PartialType(CreateTreatmentPlanDto) {}

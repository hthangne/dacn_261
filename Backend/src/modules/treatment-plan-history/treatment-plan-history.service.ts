import { Injectable } from '@nestjs/common';
import { CreateTreatmentPlanHistoryDto } from './dto/create-treatment-plan-history.dto.js';
import { UpdateTreatmentPlanHistoryDto } from './dto/update-treatment-plan-history.dto.js';

@Injectable()
export class TreatmentPlanHistoryService {
  create(createTreatmentPlanHistoryDto: CreateTreatmentPlanHistoryDto) {
    return 'This action adds a new treatmentPlanHistory';
  }

  findAll() {
    return `This action returns all treatmentPlanHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} treatmentPlanHistory`;
  }

  update(id: number, updateTreatmentPlanHistoryDto: UpdateTreatmentPlanHistoryDto) {
    return `This action updates a #${id} treatmentPlanHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} treatmentPlanHistory`;
  }
}

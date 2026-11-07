import { Module } from '@nestjs/common';
import { TreatmentPlanHistoryService } from './treatment-plan-history.service.js';
import { TreatmentPlanHistoryController } from './treatment-plan-history.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlanHistory } from './entities/treatment-plan-history.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([TreatmentPlanHistory])],
  controllers: [TreatmentPlanHistoryController],
  providers: [TreatmentPlanHistoryService],
})
export class TreatmentPlanHistoryModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentPlansService } from './treatment-plans.service.js';
import { TreatmentPlansController } from './treatment-plans.controller.js';
import { TreatmentPlan } from './entities/treatment-plan.entity.js';
import { PlanDetail } from './entities/plan-detail.entity.js'; // Import thêm

@Module({
  // Đăng ký cả 2 entity
  imports: [TypeOrmModule.forFeature([TreatmentPlan, PlanDetail])],
  controllers: [TreatmentPlansController],
  providers: [TreatmentPlansService],
})
export class TreatmentPlansModule {}

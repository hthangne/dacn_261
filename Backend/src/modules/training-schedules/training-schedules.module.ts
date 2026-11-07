import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingSchedulesService } from './training-schedules.service.js';
import { TrainingSchedulesController } from './training-schedules.controller.js';
import { TrainingSchedule } from './entities/training-schedule.entity.js'; // Import entity

@Module({
  imports: [TypeOrmModule.forFeature([TrainingSchedule])], // Đăng ký
  controllers: [TrainingSchedulesController],
  providers: [TrainingSchedulesService],
})
export class TrainingSchedulesModule {}

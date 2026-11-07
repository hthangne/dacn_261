import { Module } from '@nestjs/common';
import { HealthRecordsService } from './health-records.service.js';
import { HealthRecordsController } from './health-records.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthRecord } from './entities/health-record.entity.js';
import { ScreeningAssessment } from './entities/screening-assessment.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([HealthRecord, ScreeningAssessment])],
  controllers: [HealthRecordsController],
  providers: [HealthRecordsService],
})
export class HealthRecordsModule {}

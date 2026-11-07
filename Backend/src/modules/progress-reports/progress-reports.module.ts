import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressReportsService } from './progress-reports.service.js';
import { ProgressReportsController } from './progress-reports.controller.js';
import { ProgressReport } from './entities/progress-report.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ProgressReport])],
  controllers: [ProgressReportsController],
  providers: [ProgressReportsService],
  exports: [ProgressReportsService],
})
export class ProgressReportsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyLogsService } from './daily-logs.service.js';
import { DailyLogsController } from './daily-logs.controller.js';
import { DailyLog } from './entities/daily-log.entity.js'; // Import entity

@Module({
  imports: [TypeOrmModule.forFeature([DailyLog])], // Đăng ký
  controllers: [DailyLogsController],
  providers: [DailyLogsService],
})
export class DailyLogsModule {}

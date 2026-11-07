import { Module } from '@nestjs/common';
import { ExerciseLogsService } from './exercise-logs.service.js';
import { ExerciseLogsController } from './exercise-logs.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseLog } from './entities/exercise-log.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseLog])],
  controllers: [ExerciseLogsController],
  providers: [ExerciseLogsService],
})
export class ExerciseLogsModule {}

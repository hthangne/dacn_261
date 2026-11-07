import { Module } from '@nestjs/common';
import { ExerciseSessionsService } from './exercise-sessions.service.js';
import { ExerciseSessionsController } from './exercise-sessions.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseSession } from './entities/exercise-session.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ExerciseSession])],
  controllers: [ExerciseSessionsController],
  providers: [ExerciseSessionsService],
})
export class ExerciseSessionsModule {}

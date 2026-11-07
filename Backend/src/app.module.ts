import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { ChildProfilesModule } from './modules/child-profiles/child-profiles.module.js';
import { HealthRecordsModule } from './modules/health-records/health-records.module.js';
import { ExercisesModule } from './modules/exercises/exercises.module.js';
import { TreatmentPlansModule } from './modules/treatment-plans/treatment-plans.module.js';
import { TrainingSchedulesModule } from './modules/training-schedules/training-schedules.module.js';
import { DailyLogsModule } from './modules/daily-logs/daily-logs.module.js';
import { ProgressReportsModule } from './modules/progress-reports/progress-reports.module.js';
import { ConservationModule } from './modules/conversations/conservation.module.js';
import { AuditLogsModule } from './modules/audit-logs/audit-logs.module.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ExerciseSessionsModule } from './modules/exercise-sessions/exercise-sessions.module.js';
import { ExerciseLogsModule } from './modules/exercise-logs/exercise-logs.module.js';
import { TreatmentPlanHistoryModule } from './modules/treatment-plan-history/treatment-plan-history.module.js';
import { ImageComparisonsModule } from './modules/image-comparisons/image-comparisons.module.js';
import { ConsultationMessagesModule } from './modules/consultation-messages/consultation-messages.module.js';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),

        autoLoadEntities: true,

        synchronize: configService.get<string>('DB_SYNCHRONIZE') === 'true',
      }),
    }),

    UsersModule,
    AuthModule,
    ChildProfilesModule,
    HealthRecordsModule,
    ExercisesModule,
    TreatmentPlansModule,
    TrainingSchedulesModule,
    DailyLogsModule,
    ProgressReportsModule,
    ConservationModule,
    AuditLogsModule,
    ExerciseSessionsModule,
    ExerciseLogsModule,
    TreatmentPlanHistoryModule,
    ImageComparisonsModule,
    ConsultationMessagesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}

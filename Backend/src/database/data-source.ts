import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { config } from 'dotenv';

import { Exercise } from '../modules/exercises/entities/exercise.entity.js';
import { AuditLog } from '../modules/audit-logs/entities/audit-log.entity.js';
import { Auth } from '../modules/auth/entities/auth.entity.js';
import { ChildProfile } from '../modules/child-profiles/entities/child-profile.entity.js';
import { Conversation } from '../modules/conversations/entities/conversation.entity.js';
import { ConsultationMessage } from '../modules/consultation-messages/entities/consultation-message.entity.js';
import { DailyLog } from '../modules/daily-logs/entities/daily-log.entity.js';
import { ExerciseLog } from '../modules/exercise-logs/entities/exercise-log.entity.js';
import { ExerciseSession } from '../modules/exercise-sessions/entities/exercise-session.entity.js';
import { HealthRecord } from '../modules/health-records/entities/health-record.entity.js';
import { ImageComparison } from '../modules/image-comparisons/entities/image-comparison.entity.js';
import { ProgressReport } from '../modules/progress-reports/entities/progress-report.entity.js';
import { TrainingSchedule } from '../modules/training-schedules/entities/training-schedule.entity.js';
import { TreatmentPlanHistory } from '../modules/treatment-plan-history/entities/treatment-plan-history.entity.js';
import { TreatmentPlan } from '../modules/treatment-plans/entities/treatment-plan.entity.js';
import { User } from '../modules/users/entities/user.entity.js';
import { PlanDetail } from '../modules/treatment-plans/entities/plan-detail.entity.js';
import { FootImage } from '../modules/child-profiles/entities/foot-image.entity.js';
import { ScreeningAssessment } from '../modules/health-records/entities/screening-assessment.entity.js';
import { Parent } from '../modules/users/entities/parent.entity.js';
import { Doctor } from '../modules/users/entities/doctor.entity.js';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',

  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5436),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'dacn261',

  entities: [
    AuditLog,
    Auth,
    ChildProfile,
    FootImage,
    ConsultationMessage,
    Conversation,
    DailyLog,
    ExerciseLog,
    ExerciseSession,
    Exercise,
    HealthRecord,
    ScreeningAssessment,
    ImageComparison,
    ProgressReport,
    TrainingSchedule,
    TreatmentPlanHistory,
    TreatmentPlan,
    User,
    PlanDetail,
    Parent,
    Doctor,
  ],

  migrations: ['src/database/migrations/*.ts'],

  synchronize: false,

  logging: process.env.NODE_ENV === 'development',
});

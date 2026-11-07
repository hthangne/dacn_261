import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { TreatmentPlan } from '../../treatment-plans/entities/treatment-plan.entity.js';
import { TrainingSchedule } from '../../training-schedules/entities/training-schedule.entity.js';

@Entity('exercise_sessions')
export class ExerciseSession {
  @PrimaryGeneratedColumn('uuid')
  sessionId: string;

  @Column({ type: 'date' })
  sessionDate: Date;

  @Column({ type: 'time', nullable: true })
  startTime: string;

  @Column({ type: 'time', nullable: true })
  endTime: string;

  @Column({ type: 'varchar', length: 50, default: 'PENDING' })
  completionStatus: string; // Trạng thái: PENDING, COMPLETED, INCOMPLETE...

  @Column({ type: 'text', nullable: true })
  overallNotes: string;

  // --- KHÓA NGOẠI ---
  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne(() => TreatmentPlan, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;

  @Column({ type: 'uuid' })
  scheduleId: string;

  @ManyToOne(() => TrainingSchedule, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'scheduleId' })
  schedule: Relation<TrainingSchedule>;
}

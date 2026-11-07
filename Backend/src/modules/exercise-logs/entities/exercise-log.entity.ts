import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { ExerciseSession } from '../../exercise-sessions/entities/exercise-session.entity.js';
import { PlanDetail } from '../../treatment-plans/entities/plan-detail.entity.js';

@Entity('exercise_logs')
export class ExerciseLog {
  @PrimaryGeneratedColumn('uuid')
  exerciseLogId: string;

  @Column({ type: 'int', default: 0 })
  completedReps: number;

  @Column({ type: 'int', default: 0 })
  completedSets: number;

  @Column({ type: 'float', nullable: true })
  durationMinutes: number;

  @Column({ type: 'int', nullable: true })
  painLevel: number; // Mức độ đau khi tập bài này

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'uuid' })
  sessionId: string;

  @ManyToOne(() => ExerciseSession, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sessionId' })
  session: Relation<ExerciseSession>;

  @Column({ type: 'uuid' })
  detailId: string;

  @ManyToOne(() => PlanDetail, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'detailId' })
  planDetail: Relation<PlanDetail>;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import type { TreatmentPlan } from './treatment-plan.entity.js';
import type { Exercise } from '../../exercises/entities/exercise.entity.js';

@Entity('plan_details')
export class PlanDetail {
  @PrimaryGeneratedColumn('uuid')
  detailId: string;

  @Column({ type: 'int', default: 1 })
  frequencyPerWeek: number;

  @Column({ type: 'int', default: 1 })
  repsPerSession: number;

  @Column({ type: 'int', nullable: true })
  durationMinutes: number | null;

  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne('TreatmentPlan', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;

  @Column({ type: 'uuid' })
  exerciseId: string;

  @ManyToOne('Exercise', 'planDetails', { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'exerciseId' })
  exercise: Relation<Exercise>;
}

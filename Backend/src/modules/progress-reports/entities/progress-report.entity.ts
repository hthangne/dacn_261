import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';
import { Doctor } from '../../users/entities/doctor.entity.js';
import { TreatmentPlan } from '../../treatment-plans/entities/treatment-plan.entity.js';

@Entity('progress_reports')
export class ProgressReport {
  @PrimaryGeneratedColumn('uuid')
  reportId: string;

  @Column({ type: 'date' })
  periodStart: Date;

  @Column({ type: 'date' })
  periodEnd: Date;

  @Column({ type: 'float', nullable: true })
  complianceRate: number;

  @Column({ type: 'jsonb', nullable: true })
  painTrendData: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  imageComparisonData: Record<string, any>;

  @Column({ type: 'text', nullable: true })
  doctorFeedback: string;

  @Column({ type: 'uuid' })
  childId: string;

  @ManyToOne(() => ChildProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;

  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne(() => TreatmentPlan, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;

  @Column({ type: 'uuid' })
  doctorId: string;

  @ManyToOne(() => Doctor, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctorId' })
  doctor: Relation<Doctor>;

  @CreateDateColumn()
  createdAt: Date;
}

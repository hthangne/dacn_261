import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { TreatmentPlan } from '../../treatment-plans/entities/treatment-plan.entity.js';
import { Doctor } from '../../users/entities/doctor.entity.js';

@Entity('treatment_plan_histories')
export class TreatmentPlanHistory {
  @PrimaryGeneratedColumn('uuid')
  historyId: string;

  @CreateDateColumn()
  changeAt: Date;

  @Column({ type: 'varchar', length: 100 })
  changeType: string;

  @Column({ type: 'jsonb', nullable: true })
  oldValue: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  newValue: Record<string, any>;

  @Column({ type: 'text', nullable: true })
  changeReason: string;

  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne(() => TreatmentPlan, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;

  @Column({ type: 'uuid' })
  doctorId: string;

  @ManyToOne(() => Doctor, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'doctorId' })
  doctor: Relation<Doctor>;
}

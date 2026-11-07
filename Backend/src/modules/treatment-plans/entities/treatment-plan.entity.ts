import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { PlanStatus } from '../enums/plan.enum.js';
// THÊM CHỮ 'type' CHO CẢ 2
import type { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';
import type { Doctor } from '../../users/entities/doctor.entity.js';

@Entity('treatment_plans')
export class TreatmentPlan {
  @PrimaryGeneratedColumn('uuid')
  planId: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  stage: string | null;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date | null;

  @Column({ type: 'enum', enum: PlanStatus, default: PlanStatus.ACTIVE })
  status: PlanStatus;

  @Column({ type: 'float', nullable: true })
  orthoticWearHoursPerDay: number | null;

  @Column({ type: 'uuid' })
  childId: string;

  @ManyToOne('ChildProfile', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;

  @Column({ type: 'uuid' })
  doctorId: string;

  @ManyToOne('Doctor', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'doctorId' })
  doctor: Relation<Doctor>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

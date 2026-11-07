import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { ScheduleStatus } from '../enums/schedule.enum.js';
// Import bình thường, không dùng chữ type
import { TreatmentPlan } from '../../treatment-plans/entities/treatment-plan.entity.js';

@Entity('training_schedules')
export class TrainingSchedule {
  @PrimaryGeneratedColumn('uuid')
  scheduleId: string;

  @Column({ type: 'date' })
  scheduledDate: Date; // Ngày dự kiến tập

  @Column({ type: 'time' })
  scheduleTime: Date;

  @Column({
    type: 'enum',
    enum: ScheduleStatus,
    default: ScheduleStatus.PENDING,
  })
  status: ScheduleStatus;

  // --- KHÓA NGOẠI TỚI PHÁC ĐỒ ---
  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne(() => TreatmentPlan, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;
}

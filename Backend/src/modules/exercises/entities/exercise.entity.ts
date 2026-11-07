import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { ExerciseStatus } from '../enums/exercise.enum.js';
// THÊM CHỮ 'type'
import type { PlanDetail } from '../../treatment-plans/entities/plan-detail.entity.js';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  exerciseId: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'text', nullable: true })
  videoUrl: string | null;

  @Column({
    type: 'enum',
    enum: ExerciseStatus,
    default: ExerciseStatus.ACTIVE,
  })
  status: ExerciseStatus;

  // DÙNG CHUỖI 'PlanDetail' ĐỂ KHÔNG GỌI CLASS LÚC RUNTIME
  @OneToMany('PlanDetail', 'exercise')
  planDetails: Relation<PlanDetail[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

// Các Entity liên kết (bạn điều chỉnh lại đường dẫn import cho đúng với project)
import { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';
import { Parent } from '../../users/entities/parent.entity.js';
import { TreatmentPlan } from '../../treatment-plans/entities/treatment-plan.entity.js';

@Entity('daily_logs')
export class DailyLog {
  @PrimaryGeneratedColumn('uuid')
  logId: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'boolean', default: false })
  isCompleted: boolean;

  @Column({ type: 'int', nullable: true })
  painLevel: number | null;

  @Column({ type: 'boolean', nullable: true })
  isCooperative: boolean | null;

  @Column({ type: 'text', nullable: true })
  parentNotes: string | null;

  @Column({ type: 'int', default: 0 })
  pointsEarned: number;

  @Column({ type: 'uuid' })
  childId: string;

  @ManyToOne(() => ChildProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;

  @Column({ type: 'uuid' })
  parentId: string;

  @ManyToOne(() => Parent, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentId' })
  parent: Relation<Parent>;

  @Column({ type: 'uuid' })
  planId: string;

  @ManyToOne(() => TreatmentPlan, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'planId' })
  plan: Relation<TreatmentPlan>;

  @CreateDateColumn()
  createdAt: Date;
}

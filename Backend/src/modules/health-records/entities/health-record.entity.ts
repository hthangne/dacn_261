import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import type { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';

@Entity('health_records')
export class HealthRecord {
  @PrimaryGeneratedColumn('uuid')
  recordId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  recordAt: Date; // Thời điểm ghi nhận

  @Column({ type: 'float', nullable: true })
  height: number;

  @Column({ type: 'float', nullable: true })
  weight: number;

  @Column({ type: 'int', nullable: true })
  painLevel: number; // Thang đo mức độ đau (VD: 0 - 10)

  @Column({ type: 'text', nullable: true })
  mobilityNotes: string; // Ghi chú vận động

  @Column({ type: 'uuid' })
  childId: string;

  // Quan hệ N-1: Nhiều bản ghi sức khỏe thuộc về 1 trẻ
  @ManyToOne('ChildProfile', 'healthRecords', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;
}

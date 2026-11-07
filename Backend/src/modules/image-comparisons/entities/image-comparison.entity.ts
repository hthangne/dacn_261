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

@Entity('image_comparisons')
export class ImageComparison {
  @PrimaryGeneratedColumn('uuid')
  comparisonId: string;

  @CreateDateColumn()
  comparedAt: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  comparisonMode: string;

  @Column({ type: 'text', nullable: true })
  doctorNotes: string;

  @Column({ type: 'uuid' })
  childId: string;

  @ManyToOne(() => ChildProfile, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;

  @Column({ type: 'uuid' })
  doctorId: string;

  @ManyToOne(() => Doctor, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'doctorId' })
  doctor: Relation<Doctor>;
}

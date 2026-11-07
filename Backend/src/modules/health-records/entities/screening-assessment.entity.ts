import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

// Import Enums
import { AssessmentStatus } from '../enums/assessment.enum.js';
import { SeverityLevel } from '../../child-profiles/enums/child.enum.js'; // Tái sử dụng enum Mức độ bẹt

// Import Entities để liên kết khóa ngoại
import { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';
import { Parent } from '../../users/entities/parent.entity.js';
import { Doctor } from '../../users/entities/doctor.entity.js';

@Entity('screening_assessments')
export class ScreeningAssessment {
  @PrimaryGeneratedColumn('uuid')
  assessmentId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateSubmitted: Date;

  @Column({ type: 'jsonb', nullable: true })
  questionnaireData: Record<string, any>;

  @Column({ type: 'enum', enum: SeverityLevel, nullable: true })
  autoSeverityAlert: SeverityLevel;

  @Column({ type: 'text', nullable: true })
  doctorConclusion: string | null;

  @Column({
    type: 'enum',
    enum: AssessmentStatus,
    default: AssessmentStatus.PENDING,
  })
  status: AssessmentStatus;

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

  @Column({ type: 'uuid', nullable: true })
  doctorId: string | null;

  @ManyToOne(() => Doctor, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'doctorId' })
  doctor: Relation<Doctor>;
}

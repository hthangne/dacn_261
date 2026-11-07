import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { Gender, SeverityLevel } from '../enums/child.enum.js';

import type { Parent } from '../../users/entities/parent.entity.js';
import type { HealthRecord } from '../../health-records/entities/health-record.entity.js';
import type { FootImage } from './foot-image.entity.js';

@Entity('child_profiles')
export class ChildProfile {
  @PrimaryGeneratedColumn('uuid')
  childId: string;

  @Column({ type: 'varchar', length: 100 })
  fullName: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ type: 'float', nullable: true })
  height: number;

  @Column({ type: 'float', nullable: true })
  weight: number;

  @Column({ type: 'text', nullable: true })
  familyMedicalHistory: string | null;

  @Column({ type: 'enum', enum: SeverityLevel, default: SeverityLevel.NORMAL })
  severityLevel: SeverityLevel;

  @Column({ type: 'int', default: 0 })
  gamificationPoints: number;

  @Column({ type: 'uuid' })
  parentId: string;

  @ManyToOne('Parent', 'children', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentId' })
  parent: Relation<Parent>;

  @OneToMany('HealthRecord', 'child')
  healthRecords: Relation<HealthRecord[]>;

  footImages: Relation<FootImage[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { ConversationStatus } from '../enums/conversation.enum.js';
import { ChildProfile } from '../../child-profiles/entities/child-profile.entity.js';
import { Parent } from '../../users/entities/parent.entity.js';
import { Doctor } from '../../users/entities/doctor.entity.js';

@Entity('conversations')
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  conversationId: string;

  @Column({
    type: 'enum',
    enum: ConversationStatus,
    default: ConversationStatus.PENDING,
  })
  status: ConversationStatus;

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

  @CreateDateColumn()
  createdAt: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { Conversation } from '../../conversations/entities/conversation.entity.js';
import { User } from '../../users/entities/user.entity.js';

@Entity('consultation_messages')
export class ConsultationMessage {
  @PrimaryGeneratedColumn('uuid')
  messageId: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  attachmentUrl: string | null;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @CreateDateColumn()
  timestamp: Date;

  @Column({ type: 'uuid' })
  conversationId: string;

  @ManyToOne(() => Conversation, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'conversationId' })
  conversation: Relation<Conversation>;

  @Column({ type: 'uuid' })
  senderUserId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'senderUserId' })
  sender: Relation<User>;
}

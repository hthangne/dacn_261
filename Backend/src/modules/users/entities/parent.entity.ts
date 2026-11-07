import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import type { User } from './user.entity.js';

@Entity('parents')
export class Parent {
  @PrimaryColumn('uuid')
  userId: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @OneToOne('User', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;
}

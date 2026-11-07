import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import type { User } from './user.entity.js';

@Entity('doctors')
export class Doctor {
  @PrimaryColumn('uuid')
  userId: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  specialty: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  licenseNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  clinic: string;

  @OneToOne('User', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;
}

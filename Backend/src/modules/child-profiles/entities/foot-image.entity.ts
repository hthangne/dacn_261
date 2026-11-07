import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { FootSide } from '../enums/foot-image.enum.js';
import type { ChildProfile } from './child-profile.entity.js';

@Entity('foot_images')
export class FootImage {
  @PrimaryGeneratedColumn('uuid')
  imageId: string;

  @Column({ type: 'text' })
  imageUrl: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  capturedAt: Date;

  @Column({ type: 'enum', enum: FootSide })
  footSide: FootSide;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'uuid' })
  childId: string;

  @ManyToOne('ChildProfile', 'footImages', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'childId' })
  child: Relation<ChildProfile>;
}

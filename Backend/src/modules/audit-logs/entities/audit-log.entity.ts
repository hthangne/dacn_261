import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  logId: string;

  @Column({ type: 'uuid', nullable: true })
  userId: string;

  @Column({ type: 'varchar', length: 100 })
  action: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  tableName: string;

  @Column({ type: 'jsonb', nullable: true })
  oldData: Record<string, any> | null;

  @Column({ type: 'jsonb', nullable: true })
  newData: Record<string, any> | null;

  @CreateDateColumn()
  createdAt: Date;
}

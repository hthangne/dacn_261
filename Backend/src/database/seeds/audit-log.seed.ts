import { AppDataSource } from '../data-source.js';
import { AuditLog } from '../../modules/audit-logs/entities/audit-log.entity.js';

export async function seedAuditLogs() {
  const auditLogRepository = AppDataSource.getRepository(AuditLog);

  const auditLogs = [
    {
      userId: '55555555-5555-4555-8555-555555555555',
      action: 'CREATE_USER',
      tableName: 'users',
      oldData: null,
      newData: {
        fullName: 'Nguyen Van An',
        email: 'an.parent@gmail.com',
        role: 'PARENT',
      },
    },
    {
      userId: '55555555-5555-4555-8555-555555555555',
      action: 'CREATE_USER',
      tableName: 'users',
      oldData: null,
      newData: {
        fullName: 'Le Van Cuong',
        email: 'cuong.doctor@gmail.com',
        role: 'DOCTOR',
      },
    },
    {
      userId: '33333333-3333-4333-8333-333333333333',
      action: 'UPDATE_USER',
      tableName: 'users',
      oldData: {
        status: 'LOCKED',
      },
      newData: {
        status: 'ACTIVE',
      },
    },
    {
      userId: '11111111-1111-4111-8111-111111111111',
      action: 'CREATE_EXERCISE',
      tableName: 'exercises',
      oldData: null,
      newData: {
        name: 'Toe Curl',
        description: 'Bài tập cuộn các ngón chân.',
      },
    },
    {
      userId: '33333333-3333-4333-8333-333333333333',
      action: 'UPDATE_EXERCISE',
      tableName: 'exercises',
      oldData: {
        videoUrl: null,
      },
      newData: {
        videoUrl: 'https://example.com/toe-curl.mp4',
      },
    },
  ];

  await auditLogRepository.save(auditLogs);
}

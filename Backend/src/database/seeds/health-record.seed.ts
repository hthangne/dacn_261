import { AppDataSource } from '../data-source.js';
import { HealthRecord } from '../../modules/health-records/entities/health-record.entity.js';

export async function seedHealthRecords() {
  const healthRecordRepository = AppDataSource.getRepository(HealthRecord);

  const healthRecords = [
    // Nguyen Minh Khang
    {
      recordAt: new Date('2026-10-01T08:00:00'),
      height: 115.5,
      weight: 22.5,
      painLevel: 2,
      mobilityNotes:
        'Bé đi lại bình thường, đôi lúc than mỏi chân khi vận động lâu.',
      childId: 'cccccccc-1111-4111-8111-111111111111',
    },
    {
      recordAt: new Date('2026-11-01T08:00:00'),
      height: 116,
      weight: 22.8,
      painLevel: 1,
      mobilityNotes: 'Khả năng vận động cải thiện, bé ít than đau hơn.',
      childId: 'cccccccc-1111-4111-8111-111111111111',
    },

    // Tran Gia Bao
    {
      recordAt: new Date('2026-10-05T08:00:00'),
      height: 120,
      weight: 25,
      painLevel: 4,
      mobilityNotes:
        'Bé thường mỏi chân sau khi chạy nhảy trong thời gian dài.',
      childId: 'cccccccc-2222-4111-8111-111111111111',
    },
    {
      recordAt: new Date('2026-11-05T08:00:00'),
      height: 120.5,
      weight: 25.3,
      painLevel: 3,
      mobilityNotes: 'Bé vẫn còn mỏi chân nhưng mức độ đau đã giảm.',
      childId: 'cccccccc-2222-4111-8111-111111111111',
    },

    // Le Ngoc Anh
    {
      recordAt: new Date('2026-10-10T08:00:00'),
      height: 110,
      weight: 19.5,
      painLevel: 0,
      mobilityNotes: 'Bé vận động bình thường, chưa ghi nhận dấu hiệu đau.',
      childId: 'cccccccc-3333-4222-8222-222222222222',
    },
    {
      recordAt: new Date('2026-11-07T08:00:00'),
      height: 110.5,
      weight: 19.8,
      painLevel: 1,
      mobilityNotes: 'Bé vận động tốt, đôi lúc hơi khó chịu khi tập luyện.',
      childId: 'cccccccc-3333-4222-8222-222222222222',
    },

    // Pham Duc Huy
    {
      recordAt: new Date('2026-10-15T08:00:00'),
      height: 125,
      weight: 28,
      painLevel: 5,
      mobilityNotes: 'Bé có biểu hiện đau lòng bàn chân sau khi đi bộ lâu.',
      childId: 'cccccccc-4444-4222-8222-222222222222',
    },
    {
      recordAt: new Date('2026-11-07T08:00:00'),
      height: 125.5,
      weight: 28.2,
      painLevel: 3,
      mobilityNotes: 'Tình trạng đau giảm, bé có thể đi bộ lâu hơn trước.',
      childId: 'cccccccc-4444-4222-8222-222222222222',
    },
  ];

  await healthRecordRepository.save(healthRecords);
}

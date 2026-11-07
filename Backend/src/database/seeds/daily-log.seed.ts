import { AppDataSource } from '../data-source.js';
import { DailyLog } from '../../modules/daily-logs/entities/daily-log.entity.js';

export async function seedDailyLogs() {
  const dailyLogRepository = AppDataSource.getRepository(DailyLog);

  const dailyLogs = [
    {
      date: new Date('2026-11-01'),
      isCompleted: true,
      painLevel: 1,
      isCooperative: true,
      parentNotes: 'Bé hợp tác rất tốt, hoàn thành bài tập nhanh chóng.',
      pointsEarned: 10,
      parentId: '11111111-1111-4111-8111-111111111111',
      childId: 'cccccccc-1111-4111-8111-111111111111',
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
    },
    {
      date: new Date('2026-11-02'),
      isCompleted: false,
      painLevel: 6,
      isCooperative: false,
      parentNotes:
        'Bé kêu đau ở lòng bàn chân nhiều nên chỉ tập được một nửa rồi nghỉ.',
      pointsEarned: 2,

      parentId: '11111111-1111-4111-8111-111111111111',
      childId: 'cccccccc-1111-4111-8111-111111111111',
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
    },
    {
      date: new Date('2026-11-01'),
      isCompleted: true,
      painLevel: 0,
      isCooperative: true,
      parentNotes: 'Hôm nay bé tự giác mang nẹp và tập các bài tập ngón chân.',
      pointsEarned: 15,
      parentId: '22222222-2222-4222-8222-222222222222',
      childId: 'cccccccc-3333-4222-8222-222222222222',
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
    },
  ];

  await dailyLogRepository.save(dailyLogs);
}

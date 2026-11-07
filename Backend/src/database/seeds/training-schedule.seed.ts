import { AppDataSource } from '../data-source.js';
import { TrainingSchedule } from '../../modules/training-schedules/entities/training-schedule.entity.js';
import { ScheduleStatus } from '../../modules/training-schedules/enums/schedule.enum.js';

export async function seedTrainingSchedules() {
  const scheduleRepository = AppDataSource.getRepository(TrainingSchedule);

  // Kiểm tra dữ liệu để tránh duplicate khi chạy seed nhiều lần
  const count = await scheduleRepository.count();
  if (count > 0) {
    console.log('✅ TrainingSchedules đã tồn tại, bỏ qua seed...');
    return;
  }

  const schedules = [
    // Lịch tập của Khang (Plan 1)
    {
      scheduledDate: new Date('2026-11-01'),
      scheduleTime: '08:00:00' as any, // TypeORM 'time' column thường nhận chuỗi HH:mm:ss
      status: ScheduleStatus.COMPLETED, // Khớp với DailyLog đã hoàn thành
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
    },
    {
      scheduledDate: new Date('2026-11-02'),
      scheduleTime: '08:00:00' as any,
      status: ScheduleStatus.PENDING, // Khớp với DailyLog tập chưa xong / kêu đau
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
    },
    {
      scheduledDate: new Date('2026-11-03'),
      scheduleTime: '08:00:00' as any,
      status: ScheduleStatus.PENDING, // Lịch của tương lai
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
    },

    // Lịch tập của Gia Bảo (Plan 2)
    {
      scheduledDate: new Date('2026-11-05'),
      scheduleTime: '17:30:00' as any,
      status: ScheduleStatus.PENDING,
      planId: 'aaaaaaaa-2222-4222-8222-222222222222',
    },

    // Lịch tập của Ngọc Anh (Plan 3)
    {
      scheduledDate: new Date('2026-11-01'),
      scheduleTime: '19:00:00' as any,
      status: ScheduleStatus.COMPLETED, // Khớp với DailyLog
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
    },
    {
      scheduledDate: new Date('2026-11-02'),
      scheduleTime: '19:00:00' as any,
      status: ScheduleStatus.PENDING,
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
    },
  ];

  await scheduleRepository.save(schedules);
  console.log('✅ Seed TrainingSchedules thành công!');
}

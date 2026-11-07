import { AppDataSource } from '../data-source.js';
import { ExerciseSession } from '../../modules/exercise-sessions/entities/exercise-session.entity.js';
import { TrainingSchedule } from '../../modules/training-schedules/entities/training-schedule.entity.js';

export async function seedExerciseSessions() {
  const sessionRepository = AppDataSource.getRepository(ExerciseSession);
  const scheduleRepository = AppDataSource.getRepository(TrainingSchedule);

  const count = await sessionRepository.count();
  if (count > 0) {
    console.log('✅ ExerciseSessions đã tồn tại, bỏ qua seed...');
    return;
  }

  const schedules = await scheduleRepository.find();

  if (schedules.length < 2) {
    console.warn(
      '⚠️ Chưa đủ dữ liệu TrainingSchedules để seed ExerciseSessions',
    );
    return;
  }

  const sessions = [
    {
      sessionDate: new Date('2026-11-01'),
      startTime: '08:05:00',
      endTime: '08:35:00',
      completionStatus: 'COMPLETED',
      overallNotes: 'Bé hoàn thành tốt các bài tập trong lịch.',
      planId: schedules[0].planId,
      scheduleId: schedules[0].scheduleId,
    },

    {
      sessionDate: new Date('2026-11-02'),
      startTime: '08:05:00',
      endTime: '08:20:00',
      completionStatus: 'INCOMPLETE',
      overallNotes:
        'Bé bị mỏi lòng bàn chân, không thể hoàn thành toàn bộ bài tập.',
      planId: schedules[1].planId,
      scheduleId: schedules[1].scheduleId,
    },

    ...(schedules[4]
      ? [
          {
            sessionDate: new Date('2026-11-01'),
            startTime: '19:05:00',
            endTime: '19:25:00',
            completionStatus: 'COMPLETED',
            overallNotes: 'Bé hợp tác tốt, hoàn thành nhanh chóng.',
            planId: schedules[4].planId,
            scheduleId: schedules[4].scheduleId,
          },
        ]
      : []),
  ];

  await sessionRepository.save(sessions);
}

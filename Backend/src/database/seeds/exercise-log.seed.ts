import { AppDataSource } from '../data-source.js';
import { ExerciseLog } from '../../modules/exercise-logs/entities/exercise-log.entity.js';
import { ExerciseSession } from '../../modules/exercise-sessions/entities/exercise-session.entity.js';
import { PlanDetail } from '../../modules/treatment-plans/entities/plan-detail.entity.js';

export async function seedExerciseLogs() {
  const logRepository = AppDataSource.getRepository(ExerciseLog);
  const sessionRepository = AppDataSource.getRepository(ExerciseSession);
  const detailRepository = AppDataSource.getRepository(PlanDetail);

  const count = await logRepository.count();
  if (count > 0) {
    console.log('✅ ExerciseLogs đã tồn tại, bỏ qua seed...');
    return;
  }

  const sessions = await sessionRepository.find();
  const planDetails = await detailRepository.find();

  if (sessions.length < 2 || planDetails.length < 2) {
    console.warn(
      '⚠️ Chưa đủ dữ liệu Sessions hoặc PlanDetails để seed ExerciseLogs',
    );
    return;
  }

  const khangDetails = planDetails.filter(
    (d) => d.planId === 'aaaaaaaa-1111-4111-8111-111111111111',
  );
  // Plan của Ngọc Anh
  const ngocAnhDetails = planDetails.filter(
    (d) => d.planId === 'aaaaaaaa-3333-4333-8333-333333333333',
  );

  const logs = [];

  if (sessions[0] && khangDetails.length >= 2) {
    logs.push({
      completedReps: 15,
      completedSets: 3,
      durationMinutes: 10,
      painLevel: 1,
      notes: 'Bé hoàn thành tốt, không gặp khó khăn.',
      sessionId: sessions[0].sessionId,
      detailId: khangDetails[0].detailId,
    });
    logs.push({
      completedReps: 10,
      completedSets: 3,
      durationMinutes: 15,
      painLevel: 1,
      notes: 'Thực hiện bài số 2 khá mượt.',
      sessionId: sessions[0].sessionId,
      detailId: khangDetails[1].detailId,
    });
  }

  if (sessions[1] && khangDetails.length >= 1) {
    logs.push({
      completedReps: 5,
      completedSets: 1,
      durationMinutes: 5,
      painLevel: 6,
      notes:
        'Bé đau lòng bàn chân nhiều ở bài tập đầu nên dừng toàn bộ buổi tập, chưa kịp tập bài 2.',
      sessionId: sessions[1].sessionId,
      detailId: khangDetails[0].detailId,
    });
  }

  if (sessions[2] && ngocAnhDetails.length >= 1) {
    logs.push({
      completedReps: 15,
      completedSets: 4,
      durationMinutes: 10,
      painLevel: 0,
      notes: 'Bé tập rất ngoan.',
      sessionId: sessions[2].sessionId,
      detailId: ngocAnhDetails[0].detailId,
    });
  }

  await logRepository.save(logs);
}

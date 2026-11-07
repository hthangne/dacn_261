import { AppDataSource } from '../data-source.js';
import { PlanDetail } from '../../modules/treatment-plans/entities/plan-detail.entity.js';
import { Exercise } from '../../modules/exercises/entities/exercise.entity.js';

export async function seedPlanDetails() {
  const planDetailRepository = AppDataSource.getRepository(PlanDetail);
  const exerciseRepository = AppDataSource.getRepository(Exercise);

  const count = await planDetailRepository.count();
  if (count > 0) {
    console.log('✅ PlanDetails đã tồn tại, bỏ qua seed...');
    return;
  }

  // Lấy danh sách bài tập đã được seed trước đó (vì Exercise không dùng ID cứng)
  const exercises = await exerciseRepository.find();

  if (exercises.length < 3) {
    console.warn('⚠️ Chưa đủ dữ liệu Exercises để seed PlanDetails');
    return;
  }

  const planDetails = [
    // Plan 1 (Khang) - Tập 2 bài
    {
      frequencyPerWeek: 3,
      repsPerSession: 15,
      durationMinutes: 10,
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
      exerciseId: exercises[0].exerciseId, // Toe Curl
    },
    {
      frequencyPerWeek: 3,
      repsPerSession: 10,
      durationMinutes: 15,
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
      exerciseId: exercises[1].exerciseId, // Towel Scrunch
    },

    // Plan 2 (Gia Bảo) - Tập 1 bài
    {
      frequencyPerWeek: 5,
      repsPerSession: 20,
      durationMinutes: null, // Không giới hạn thời gian
      planId: 'aaaaaaaa-2222-4222-8222-222222222222',
      exerciseId: exercises[2].exerciseId, // Heel Raise
    },

    // Plan 3 (Ngọc Anh) - Tập 2 bài
    {
      frequencyPerWeek: 4,
      repsPerSession: 15,
      durationMinutes: 20,
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
      exerciseId: exercises[3].exerciseId, // Short Foot Exercise
    },
    {
      frequencyPerWeek: 4,
      repsPerSession: 10,
      durationMinutes: 15,
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
      exerciseId: exercises[4].exerciseId, // Marble Pickup
    },
  ];

  await planDetailRepository.save(planDetails);
}

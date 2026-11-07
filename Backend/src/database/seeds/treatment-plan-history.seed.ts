import { AppDataSource } from '../data-source.js';
import { TreatmentPlanHistory } from '../../modules/treatment-plan-history/entities/treatment-plan-history.entity.js';

export async function seedTreatmentPlanHistories() {
  const historyRepository = AppDataSource.getRepository(TreatmentPlanHistory);

  // Kiểm tra tránh duplicate dữ liệu
  const count = await historyRepository.count();
  if (count > 0) {
    console.log('✅ TreatmentPlanHistories đã tồn tại, bỏ qua seed...');
    return;
  }

  const histories = [
    // Lịch sử 1: Bác sĩ Cường điều chỉnh kế hoạch cho Khang sau khi bé kêu đau
    {
      changeType: 'UPDATE_ORTHOTIC_HOURS',
      oldValue: { orthoticWearHoursPerDay: 4 },
      newValue: { orthoticWearHoursPerDay: 2 },
      changeReason:
        'Bé kêu đau nhiều ở lòng bàn chân khi tập buổi thứ 2, tạm thời giảm thời gian đeo nẹp để bé thích nghi lại.',
      planId: 'aaaaaaaa-1111-4111-8111-111111111111', // Kế hoạch của Khang
      doctorId: '33333333-3333-4333-8333-333333333333', // Bác sĩ Cường
    },

    // Lịch sử 2: Bác sĩ Cường chuyển giai đoạn tập cho Gia Bảo vì tiến triển tốt
    {
      changeType: 'UPDATE_STAGE',
      oldValue: { stage: 'Giai đoạn thích nghi' },
      newValue: { stage: 'Giai đoạn tăng cường' },
      changeReason:
        'Bé đáp ứng tốt với các bài tập cơ bản trong tháng đầu, chuyển sang giai đoạn tăng cường để đẩy nhanh phục hồi.',
      planId: 'aaaaaaaa-2222-4222-8222-222222222222', // Kế hoạch của Gia Bảo
      doctorId: '33333333-3333-4333-8333-333333333333', // Bác sĩ Cường
    },
  ];

  await historyRepository.save(histories);
}

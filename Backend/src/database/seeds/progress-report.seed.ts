import { AppDataSource } from '../data-source.js';
import { ProgressReport } from '../../modules/progress-reports/entities/progress-report.entity.js';

export async function seedProgressReports() {
  const reportRepository = AppDataSource.getRepository(ProgressReport);

  // Kiểm tra tránh duplicate dữ liệu
  const count = await reportRepository.count();
  if (count > 0) {
    console.log('✅ ProgressReports đã tồn tại, bỏ qua seed...');
    return;
  }

  const reports = [
    // Báo cáo 1: Dành cho bé Minh Khang (Có dấu hiệu đau khi tập)
    {
      periodStart: new Date('2026-10-01'),
      periodEnd: new Date('2026-10-31'),
      complianceRate: 75.5, // Tỷ lệ tuân thủ bị giảm do có hôm nghỉ vì đau
      painTrendData: {
        averagePain: 3,
        peakPain: 6,
        trend: 'increased_towards_end_of_month',
      },
      imageComparisonData: {
        leftFoot: 'Chưa có sự thay đổi rõ rệt về cấu trúc vòm.',
        rightFoot: 'Chưa có sự thay đổi rõ rệt.',
      },
      doctorFeedback:
        'Bé có dấu hiệu đau lòng bàn chân ở tuần cuối tháng 10. Đã điều chỉnh giảm giờ đeo nẹp. Phụ huynh cần theo dõi sát sao biểu hiện của bé trong tháng tới.',
      childId: 'cccccccc-1111-4111-8111-111111111111', // Bé Khang
      planId: 'aaaaaaaa-1111-4111-8111-111111111111', // Plan 1
      doctorId: '33333333-3333-4333-8333-333333333333', // Bác sĩ Cường
    },

    // Báo cáo 2: Dành cho bé Ngọc Anh (Tiến triển rất tốt)
    {
      periodStart: new Date('2026-10-01'),
      periodEnd: new Date('2026-10-31'),
      complianceRate: 95.0, // Tuân thủ rất tốt
      painTrendData: {
        averagePain: 0.5,
        peakPain: 1,
        trend: 'stable_low',
      },
      imageComparisonData: {
        leftFoot: 'Góc vòm chân trái duy trì ổn định, có cải thiện nhẹ.',
        rightFoot: 'Góc vòm chân phải duy trì ổn định.',
      },
      doctorFeedback:
        'Bé thực hiện các bài tập rất ngoan, không ghi nhận tình trạng đau mỏi. Tiếp tục duy trì phác đồ hiện tại.',
      childId: 'cccccccc-3333-4222-8222-222222222222', // Bé Ngọc Anh
      planId: 'aaaaaaaa-3333-4333-8333-333333333333', // Plan 3
      doctorId: '44444444-4444-4444-8444-444444444444', // Bác sĩ Dung
    },
  ];

  await reportRepository.save(reports);
  console.log('✅ Seed ProgressReports thành công!');
}

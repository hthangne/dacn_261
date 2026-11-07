import { AppDataSource } from '../data-source.js';
import { ImageComparison } from '../../modules/image-comparisons/entities/image-comparison.entity.js';

export async function seedImageComparisons() {
  const comparisonRepository = AppDataSource.getRepository(ImageComparison);

  // Kiểm tra tránh duplicate dữ liệu khi chạy seed nhiều lần
  const count = await comparisonRepository.count();
  if (count > 0) {
    console.log('✅ ImageComparisons đã tồn tại, bỏ qua seed...');
    return;
  }

  const comparisons = [
    // So sánh ảnh 1: Bác sĩ Cường đánh giá tiến triển của bé Khang
    {
      comparisonMode: 'SIDE_BY_SIDE',
      doctorNotes:
        'So sánh hình ảnh lòng bàn chân trái của bé Khang sau 1 tháng tập luyện. Góc vòm chân chưa có sự thay đổi lớn, cần tiếp tục theo dõi thêm.',
      childId: 'cccccccc-1111-4111-8111-111111111111', // Bé Khang
      doctorId: '33333333-3333-4333-8333-333333333333', // Bác sĩ Cường
    },

    // So sánh ảnh 2: Bác sĩ Cường xem xét mức độ bẹt của bé Gia Bảo
    {
      comparisonMode: 'OVERLAY',
      doctorNotes:
        'Đo góc độ sập vòm của bé Gia Bảo bằng phương pháp chồng ảnh (Overlay). Tình trạng sập vòm chân phải có dấu hiệu chững lại, không tiến triển nặng hơn nhờ đeo nẹp đúng giờ.',
      childId: 'cccccccc-2222-4111-8111-111111111111', // Bé Gia Bảo
      doctorId: '33333333-3333-4333-8333-333333333333', // Bác sĩ Cường
    },

    // So sánh ảnh 3: Bác sĩ Dung đánh giá bé Ngọc Anh
    {
      comparisonMode: 'SIDE_BY_SIDE',
      doctorNotes:
        'Hình ảnh bàn chân bé Ngọc Anh rất tốt, cấu trúc vòm chân ổn định và có sự cải thiện nhẹ ở gót chân.',
      childId: 'cccccccc-3333-4222-8222-222222222222', // Bé Ngọc Anh
      doctorId: '44444444-4444-4444-8444-444444444444', // Bác sĩ Dung
    },
  ];

  await comparisonRepository.save(comparisons);
  console.log('✅ Seed ImageComparisons thành công!');
}

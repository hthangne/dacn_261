# Hệ Thống Hỗ Trợ Theo Dõi & Phục Hồi Bàn Chân Bẹt Ở Trẻ Em — Backend

Đây là hệ thống Backend của dự án phục hồi chức năng bàn chân bẹt cho trẻ em, được xây dựng trên nền tảng **NestJS + TypeScript**, sử dụng **PostgreSQL** và **TypeORM**.

## Yêu cầu hệ thống

- **Node.js**: Phiên bản 18+ (Khuyên dùng bản LTS)
- **pnpm**: Package manager chính của dự án
- **Docker Desktop** hoặc **Docker Engine** (để chạy PostgreSQL local)

## Cài đặt dependencies

```bash
pnpm install
```

## Cấu hình môi trường
```bash
cp .env.example .env
```
Điều chỉnh các biến kết nối Database và chuỗi bảo mật trong .env nếu cần. File .env chứa thông tin nhạy cảm nên không được commit.

## Chạy PostgreSQL
```bash
docker compose -f docker-compose.dev.yml up -d
```
PostgreSQL sẽ chạy qua Docker ở port 5436 (để tránh đụng port mặc định) cùng với cấu hình volume lưu trữ dữ liệu an toàn.

## Khởi tạo và nạp dữ liệu mẫu (Seeder)
```bash
pnpm seed
```
Hệ thống sẽ tự động dọn dẹp cấu trúc bảng cũ, tái tạo lại bảng mới theo Entity hiện tại và nạp toàn bộ dữ liệu mẫu (Mock data: User, ChildProfile, TreatmentPlan, DailyLog,...). Khuyến cáo chỉ dùng ở môi trường Development.

## Khởi chạy backend
```bash
pnpm run start:dev
```
Base API: http://localhost:8080/api
Swagger Docs: http://localhost:8080/api/docs

## Kiểm tra chất lượng code
```bash
pnpm run lint
pnpm run format
npx tsc --noEmit
```

## Cấu trúc thư mục chính

```text
src/
├── common/                 # Chứa các Filters (GlobalException), Interceptors dùng chung
├── config/                 # Cấu hình biến môi trường (Environment validation)
├── database/               # Cấu hình DataSource TypeORM và các script Seeder
├── modules/                # Chứa các nghiệp vụ lõi (Domain Modules)
│   ├── audit-logs/             # Ghi nhận lịch sử thao tác hệ thống (Audit)
│   ├── auth/                   # Xác thực và phân quyền
│   ├── child-profiles/         # Hồ sơ bệnh nhi & Cấu trúc bàn chân
│   ├── consultation-messages/  # Chi tiết tin nhắn trao đổi tư vấn
│   ├── conversations/          # Quản lý phiên giao tiếp Phụ huynh - Bác sĩ
│   ├── daily-logs/             # Nhật ký tập luyện hàng ngày (tuân thủ, mức độ đau)
│   ├── exercise-logs/          # Ghi nhận kết quả chi tiết từng bài tập (reps, sets)
│   ├── exercise-sessions/      # Quản lý các phiên tập luyện (thời gian bắt đầu/kết thúc)
│   ├── exercises/              # Thư viện danh mục bài tập phục hồi
│   ├── health-records/         # Bệnh án & Đánh giá sàng lọc (Screening Assessment)
│   ├── image-comparisons/      # Đánh giá tiến triển qua hình ảnh (Side-by-side/Overlay)
│   ├── progress-reports/       # Báo cáo tổng hợp tiến triển điều trị định kỳ
│   ├── training-schedules/     # Lịch phân bổ bài tập
│   ├── treatment-plan-history/ # Lưu vết các lần bác sĩ điều chỉnh phác đồ
│   ├── treatment-plans/        # Phác đồ điều trị chính
│   └── users/                  # Quản lý tài khoản (Parent, Doctor, Admin)
└── main.ts                 # Điểm khởi chạy của ứng dụng (Entry point)

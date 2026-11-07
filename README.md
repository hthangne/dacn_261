Markdown
# Hệ Thống Hỗ Trợ Theo Dõi & Phục Hồi Bàn Chân Bẹt Ở Trẻ Em — Backend

Đây là hệ thống Backend của dự án phục hồi chức năng bàn chân bẹt cho trẻ em, được xây dựng trên nền tảng **NestJS + TypeScript**, sử dụng **PostgreSQL** và **TypeORM**.

## Yêu cầu hệ thống

- **Node.js**: Phiên bản 18+ (Khuyên dùng bản LTS)
- **pnpm**: Package manager chính của dự án
- **Docker Desktop** hoặc **Docker Engine** (để chạy PostgreSQL local)

## Cài đặt dependencies

```bash
pnpm install
Cấu hình môi trường
Bash
cp .env.example .env
Điều chỉnh các biến kết nối Database và chuỗi bảo mật trong .env nếu cần. File .env chứa thông tin nhạy cảm nên không được commit.
Chạy PostgreSQL
Bash
docker compose -f docker-compose.dev.yml up -d
PostgreSQL sẽ chạy qua Docker ở port 5436 (để tránh đụng port mặc định) cùng với cấu hình volume lưu trữ dữ liệu an toàn.
Khởi tạo và nạp dữ liệu mẫu (Seeder)
Bash
pnpm seed
Hệ thống sẽ tự động dọn dẹp cấu trúc bảng cũ, tái tạo lại bảng mới theo Entity hiện tại và nạp toàn bộ dữ liệu mẫu (Mock data: User, ChildProfile, TreatmentPlan, DailyLog,...). Khuyến cáo chỉ dùng ở môi trường Development.
Khởi chạy backend
Bash
pnpm run start:dev
Base API: http://localhost:8080/api

Swagger Docs: http://localhost:8080/api/docs

Kiểm tra chất lượng code
Bash
pnpm run lint
pnpm run format
npx tsc --noEmit
Cấu trúc thư mục chính
Plaintext
src/
├── common/                 # Chứa các Filters (GlobalException), Interceptors dùng chung
├── config/                 # Cấu hình biến môi trường (Environment validation)
├── database/               # Cấu hình DataSource TypeORM và các script Seeder
├── modules/                # Chứa các nghiệp vụ lõi (Domain Modules)
│   ├── auth/               # Xác thực và phân quyền
│   ├── users/              # Quản lý tài khoản (Parent, Doctor, Admin)
│   ├── child-profiles/     # Hồ sơ bệnh nhi & Cấu trúc bàn chân
│   ├── health-records/     # Bệnh án & Đánh giá sàng lọc
│   ├── treatment-plans/    # Phác đồ điều trị & Chi tiết bài tập
│   ├── exercises/          # Thư viện bài tập phục hồi
│   ├── training-schedules/ # Lịch tập luyện
│   ├── daily-logs/         # Nhật ký tập luyện hàng ngày
│   ├── progress-reports/   # Báo cáo tiến triển điều trị & So sánh hình ảnh
│   └── conversations/      # Giao tiếp & Tư vấn giữa Phụ huynh - Bác sĩ
└── main.ts                 # Điểm khởi chạy của ứng dụng (Entry point)
Nguyên tắc thiết kế
Các module nghiệp vụ tuân thủ nghiêm ngặt mô hình phân tầng:

Controller: Tiếp nhận request, điều hướng và trả về response.

Service: Xử lý logic nghiệp vụ lõi (Business logic).

Repository (TypeORM): Tương tác trực tiếp với cơ sở dữ liệu PostgreSQL.

DTOs: Xác thực (Validation) và định dạng dữ liệu đầu vào.

Entities: Ánh xạ (mapping) trực tiếp với cấu trúc bảng trong CSDL.

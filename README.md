Markdown
# Hệ Thống Hỗ Trợ Theo Dõi & Phục Hồi Bàn Chân Bẹt Ở Trẻ Em — Backend

Đây là hệ thống Backend của dự án phục hồi chức năng bàn chân bẹt cho trẻ em, được xây dựng trên nền tảng **NestJS + TypeScript**, sử dụng **PostgreSQL** và **TypeORM**.

---

## 🛠 Yêu cầu hệ thống (Prerequisites)

Để code chạy trơn tru trên máy, đồng đội cần cài đặt sẵn:
- **Node.js**: Phiên bản 18+ (Khuyên dùng bản LTS).
- **pnpm**: Package manager chính của dự án.
- **Docker Desktop** hoặc **Docker Engine**: Để chạy Database PostgreSQL qua container.

---

## 🚀 Hướng dẫn cài đặt (Setup)

**1. Cài đặt các thư viện phụ thuộc:**
```bash
pnpm install
2. Cấu hình biến môi trường:
Tạo file .env từ file mẫu .env.example:

Bash
cp .env.example .env
Lưu ý: Mở file .env để điền mật khẩu Database và cấu hình chuỗi bảo mật (BETTER_AUTH_SECRET). File .env chứa thông tin nhạy cảm nên đã được gitignore, tuyệt đối không đẩy file này lên Git.

🐳 Khởi tạo Cơ sở dữ liệu (Database)
Dự án cấu hình Database bằng Docker chạy ở port 5436 (ánh xạ vào port mặc định của container).

1. Bật Database PostgreSQL:

Bash
docker compose -f docker-compose.dev.yml up -d
2. Khởi tạo và nạp dữ liệu mẫu (Seeder):
Dự án đã thiết lập sẵn cơ chế Reset & Seed. Lệnh dưới đây sẽ xóa sạch cấu trúc bảng cũ, tự động tạo lại bảng mới theo Entity hiện tại, và nạp dữ liệu mẫu (User, ChildProfile, TreatmentPlan, DailyLog,...).

Bash
pnpm seed
(⚠️ Cảnh báo: Chỉ dùng lệnh này trong môi trường Dev, lệnh sẽ xóa sạch dữ liệu cũ).

🏃‍♂️ Khởi chạy ứng dụng
Chạy server Backend ở chế độ development (tự động reload khi sửa code):

Bash
pnpm run start:dev
Sau khi server khởi động thành công, bạn có thể truy cập:

Base API: http://localhost:8080/api

Tài liệu Swagger (API Docs): http://localhost:8080/api/docs

🧪 Kiểm tra chất lượng Code (Code Quality)
Bash
# Kiểm tra lỗi Linter
pnpm run lint

# Format lại code bằng Prettier
pnpm run format

# Kiểm tra lỗi TypeScript (không build)
npx tsc --noEmit
📁 Cấu trúc thư mục chính
Plaintext
src/
├── common/                 # Chứa các Filters (vd: GlobalException), Interceptors dùng chung
├── config/                 # Cấu hình biến môi trường (Environment validation)
├── database/               # Cấu hình DataSource TypeORM và các file Seeder
├── modules/                # Chứa các nghiệp vụ lõi (Domain Modules)
│   ├── auth/               # Xác thực và phân quyền (Better Auth)
│   ├── users/              # Quản lý tài khoản (Parent, Doctor, Admin)
│   ├── child-profiles/     # Hồ sơ bệnh nhi & Cấu trúc bàn chân
│   ├── health-records/     # Bệnh án & Đánh giá sàng lọc (Screening Assessment)
│   ├── treatment-plans/    # Phác đồ điều trị & Chi tiết bài tập
│   ├── exercises/          # Thư viện bài tập phục hồi
│   ├── training-schedules/ # Lịch tập luyện
│   ├── daily-logs/         # Nhật ký tập luyện hàng ngày
│   ├── progress-reports/   # Báo cáo tiến triển điều trị & So sánh hình ảnh
│   └── conversations/      # Giao tiếp & Tư vấn giữa Phụ huynh - Bác sĩ
└── main.ts                 # Điểm khởi chạy của ứng dụng (Entry point)
🏛 Nguyên tắc thiết kế (Architecture)
Các module nghiệp vụ tuân thủ mô hình phân tầng chuẩn của NestJS:

Controller: Chịu trách nhiệm định tuyến (Routing), tiếp nhận request và trả về response.

Service: Nơi chứa toàn bộ logic xử lý nghiệp vụ (Business logic).

Repository (TypeORM): Lớp tương tác trực tiếp với PostgreSQL.

DTOs: Kiểm tra và định dạng dữ liệu đầu vào (Validation pipeline).

Entities: Lớp ánh xạ cấu trúc bảng trong CSDL (ORM).

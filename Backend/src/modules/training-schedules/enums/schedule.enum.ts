export enum ScheduleStatus {
  PENDING = 'PENDING', // Chưa tới ngày hoặc chưa tập
  COMPLETED = 'COMPLETED', // Đã hoàn thành
  MISSED = 'MISSED', // Bỏ lỡ (quá hạn mà chưa check-in)
}

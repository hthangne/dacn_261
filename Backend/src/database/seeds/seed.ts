// import { AppDataSource } from '../data-source.js';
// import { seedAuditLogs } from './audit-log.seed.js';
// import { seedChildProfiles } from './child-profile.seed.js';
// import { seedConsultationMessages } from './consultation-message.seed.js';
// import { seedConversations } from './conversation.seed.js';
// import { seedDailyLogs } from './daily-log.seed.js';
// import { seedExerciseLogs } from './exercise-log.seed.js';
// import { seedExerciseSessions } from './exercise-sessiom.seed.js';

// import { seedExercises } from './exercise.seed.js';
// import { seedFootImages } from './foot-image.seed.js';
// import { seedHealthRecords } from './health-record.seed.js';
// import { seedImageComparisons } from './image-comparison.seed.js';
// import { seedPlanDetails } from './plan-detai.seed.js';
// import { seedProgressReports } from './progress-report.seed.js';
// import { seedScreeningAssessments } from './screening-assessment.seed.js';
// import { seedTrainingSchedules } from './training-schedule.seed.js';
// import { seedTreatmentPlanHistories } from './treatment-plan-history.seed.js';
// import { seedTreatmentPlans } from './treatment-plan.seed.js';
// import { seedUsers } from './user.seed.js';
// // Import các seed khác tại đây

// async function runSeed() {
//   try {
//     console.log('Starting database seeding...');

//     await AppDataSource.initialize();

//     console.log('Database connected successfully.');

//     await seedExercises();
//     await seedUsers();
//     await seedAuditLogs();
//     await seedChildProfiles();
//     await seedConversations();
//     await seedConsultationMessages();
//     await seedTreatmentPlans();
//     await seedDailyLogs();
//     await seedHealthRecords();
//     await seedFootImages();
//     await seedScreeningAssessments();
//     await seedPlanDetails();
//     await seedTrainingSchedules();
//     await seedExerciseSessions();
//     await seedExerciseLogs();
//     await seedTreatmentPlanHistories();
//     await seedProgressReports();
//     await seedImageComparisons();

//     console.log('Database seeding completed successfully.');
//   } catch (error) {
//     console.error('Database seeding failed:', error);
//     process.exitCode = 1;
//   } finally {
//     if (AppDataSource.isInitialized) {
//       await AppDataSource.destroy();
//     }
//   }
// }

// runSeed();

import { AppDataSource } from '../data-source.js';

import { seedUsers } from './user.seed.js';
import { seedExercises } from './exercise.seed.js';
import { seedAuditLogs } from './audit-log.seed.js';
import { seedChildProfiles } from './child-profile.seed.js';
import { seedConversations } from './conversation.seed.js';
import { seedConsultationMessages } from './consultation-message.seed.js';
import { seedTreatmentPlans } from './treatment-plan.seed.js';
import { seedPlanDetails } from './plan-detai.seed.js';
import { seedTrainingSchedules } from './training-schedule.seed.js';
import { seedDailyLogs } from './daily-log.seed.js';
import { seedHealthRecords } from './health-record.seed.js';
import { seedFootImages } from './foot-image.seed.js';
import { seedScreeningAssessments } from './screening-assessment.seed.js';
import { seedImageComparisons } from './image-comparison.seed.js';
import { seedExerciseSessions } from './exercise-sessiom.seed.js';
import { seedExerciseLogs } from './exercise-log.seed.js';
import { seedTreatmentPlanHistories } from './treatment-plan-history.seed.js';
import { seedProgressReports } from './progress-report.seed.js';

async function runSeed() {
  try {
    console.log('Starting database seeding...');
    await AppDataSource.initialize();
    console.log('✅ Database connected successfully.');

    // ==========================================
    // 1. LÀM SẠCH VÀ TÁI TẠO DATABASE (RESET)
    // ==========================================
    console.log('⚠️ Dropping current database schema...');
    await AppDataSource.dropDatabase();

    console.log('⚠️ Synchronizing database (creating new tables)...');
    await AppDataSource.synchronize();

    console.log('✅ Database reset successfully. Starting to pump data...\n');

    // ==========================================
    // 2. CHẠY SEED THEO THỨ TỰ LOGIC (Tránh lỗi khóa ngoại)
    // ==========================================

    // --- Nhóm 1: Bảng Độc lập (Không chứa khóa ngoại) ---
    await seedUsers();
    await seedExercises();

    // --- Nhóm 2: Bảng cấp 1 (Phụ thuộc User) ---
    await seedAuditLogs(); // Cần User
    await seedChildProfiles(); // Cần User (Parent)

    // --- Nhóm 3: Khám bệnh & Giao tiếp (Phụ thuộc User, Child) ---
    await seedConversations(); // Cần Parent, Child
    await seedConsultationMessages(); // Cần Conversation
    await seedHealthRecords(); // Cần Child
    await seedFootImages(); // Cần Child
    await seedScreeningAssessments(); // Cần Child, Parent, Doctor
    await seedImageComparisons(); // Cần Child, Doctor

    // --- Nhóm 4: Phác đồ điều trị (Phụ thuộc Child, Doctor, Exercise) ---
    await seedTreatmentPlans(); // Cần Child, Doctor
    await seedPlanDetails(); // Cần Plan, Exercise
    await seedTrainingSchedules(); // Cần Plan

    // --- Nhóm 5: Hoạt động thực tế (Phụ thuộc Plan, Schedule) ---
    await seedDailyLogs(); // Cần Plan, Child
    await seedExerciseSessions(); // Cần Schedule, Plan
    await seedExerciseLogs(); // Cần Session, PlanDetail (Nên chạy sau Session và Detail)

    // --- Nhóm 6: Lịch sử & Báo cáo (Phụ thuộc Plan) ---
    await seedTreatmentPlanHistories(); // Cần Plan, Doctor
    await seedProgressReports(); // Cần Plan, Child, Doctor

    console.log('\n🎉 Database seeding completed successfully.');
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    process.exitCode = 1;
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
      console.log('🔒 Database connection closed.');
    }
  }
}

runSeed();

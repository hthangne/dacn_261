import { AppDataSource } from '../data-source.js';
import { ScreeningAssessment } from '../../modules/health-records/entities/screening-assessment.entity.js';
import { AssessmentStatus } from '../../modules/health-records/enums/assessment.enum.js';
import { SeverityLevel } from '../../modules/child-profiles/enums/child.enum.js';

export async function seedScreeningAssessments() {
  const assessmentRepository = AppDataSource.getRepository(ScreeningAssessment);

  const assessments = [
    {
      dateSubmitted: new Date('2026-10-01T09:00:00'),
      questionnaireData: {
        hasFootPain: true,
        painAfterActivity: true,
        difficultyWalking: false,
        frequentFatigue: true,
        footArchVisible: false,
      },
      autoSeverityAlert: SeverityLevel.LEVEL_1,
      doctorConclusion:
        'Bé có dấu hiệu bàn chân bẹt nhẹ. Nên duy trì các bài tập phục hồi và theo dõi định kỳ.',
      status: AssessmentStatus.REVIEWED,
      childId: 'cccccccc-1111-4111-8111-111111111111',
      parentId: '11111111-1111-4111-8111-111111111111',
      doctorId: '33333333-3333-4333-8333-333333333333',
    },

    {
      dateSubmitted: new Date('2026-10-05T09:00:00'),
      questionnaireData: {
        hasFootPain: true,
        painAfterActivity: true,
        difficultyWalking: true,
        frequentFatigue: true,
        footArchVisible: false,
      },
      autoSeverityAlert: SeverityLevel.LEVEL_2,
      doctorConclusion:
        'Bé có dấu hiệu bàn chân bẹt mức độ 2. Cần thực hiện chương trình phục hồi theo hướng dẫn của bác sĩ.',
      status: AssessmentStatus.REVIEWED,
      childId: 'cccccccc-2222-4111-8111-111111111111',
      parentId: '11111111-1111-4111-8111-111111111111',
      doctorId: '33333333-3333-4333-8333-333333333333',
    },

    {
      dateSubmitted: new Date('2026-10-10T09:00:00'),
      questionnaireData: {
        hasFootPain: false,
        painAfterActivity: false,
        difficultyWalking: false,
        frequentFatigue: false,
        footArchVisible: true,
      },
      autoSeverityAlert: SeverityLevel.NORMAL,
      doctorConclusion:
        'Chưa ghi nhận dấu hiệu bàn chân bẹt đáng kể. Tiếp tục theo dõi sự phát triển của bàn chân.',
      status: AssessmentStatus.REVIEWED,
      childId: 'cccccccc-3333-4222-8222-222222222222',
      parentId: '22222222-2222-4222-8222-222222222222',
      doctorId: '44444444-4444-4444-8444-444444444444',
    },

    {
      dateSubmitted: new Date('2026-11-07T09:00:00'),
      questionnaireData: {
        hasFootPain: true,
        painAfterActivity: true,
        difficultyWalking: true,
        frequentFatigue: true,
        footArchVisible: false,
      },
      autoSeverityAlert: SeverityLevel.LEVEL_3,
      doctorConclusion: null,
      status: AssessmentStatus.PENDING,
      childId: 'cccccccc-4444-4222-8222-222222222222',
      parentId: '22222222-2222-4222-8222-222222222222',
      doctorId: null,
    },
  ];

  await assessmentRepository.save(assessments);
}

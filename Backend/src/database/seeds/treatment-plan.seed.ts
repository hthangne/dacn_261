import { AppDataSource } from '../data-source.js';
import { TreatmentPlan } from '../../modules/treatment-plans/entities/treatment-plan.entity.js';
import { PlanStatus } from '../../modules/treatment-plans/enums/plan.enum.js';

export async function seedTreatmentPlans() {
  const treatmentPlanRepository = AppDataSource.getRepository(TreatmentPlan);

  const treatmentPlans = [
    {
      planId: 'aaaaaaaa-1111-4111-8111-111111111111',
      stage: 'Giai đoạn thích nghi',
      startDate: new Date('2026-10-01'),
      endDate: new Date('2026-11-01'),
      status: PlanStatus.ACTIVE,
      orthoticWearHoursPerDay: 2,
      childId: 'cccccccc-1111-4111-8111-111111111111',
      doctorId: '33333333-3333-4333-8333-333333333333',
    },
    {
      planId: 'aaaaaaaa-2222-4222-8222-222222222222',
      stage: 'Giai đoạn tăng cường',
      startDate: new Date('2026-10-15'),
      endDate: new Date('2026-12-15'),
      status: PlanStatus.ACTIVE,
      orthoticWearHoursPerDay: 4,
      childId: 'cccccccc-2222-4111-8111-111111111111',
      doctorId: '33333333-3333-4333-8333-333333333333',
    },
    {
      planId: 'aaaaaaaa-3333-4333-8333-333333333333',
      stage: 'Giai đoạn phục hồi',
      startDate: new Date('2026-09-01'),
      endDate: new Date('2026-12-01'),
      status: PlanStatus.ACTIVE,
      orthoticWearHoursPerDay: 3,
      childId: 'cccccccc-3333-4222-8222-222222222222',
      doctorId: '44444444-4444-4444-8444-444444444444',
    },
    {
      planId: 'aaaaaaaa-4444-4444-8444-444444444444',
      stage: 'Giai đoạn duy trì',
      startDate: new Date('2026-08-01'),
      endDate: null,
      status: PlanStatus.ACTIVE,
      orthoticWearHoursPerDay: 5,
      childId: 'cccccccc-4444-4222-8222-222222222222',
      doctorId: '44444444-4444-4444-8444-444444444444',
    },
  ];

  await treatmentPlanRepository.save(treatmentPlans);
}

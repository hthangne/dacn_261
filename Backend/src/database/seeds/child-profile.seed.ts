import { AppDataSource } from '../data-source.js';
import { ChildProfile } from '../../modules/child-profiles/entities/child-profile.entity.js';
import {
  Gender,
  SeverityLevel,
} from '../../modules/child-profiles/enums/child.enum.js';

export async function seedChildProfiles() {
  const childRepository = AppDataSource.getRepository(ChildProfile);

  const children = [
    {
      childId: 'cccccccc-1111-4111-8111-111111111111',
      fullName: 'Nguyen Minh Khang',
      dob: new Date('2018-05-12'),
      gender: Gender.MALE,
      height: 115,
      weight: 20,
      familyMedicalHistory: 'Không có tiền sử bệnh lý đáng chú ý.',
      severityLevel: SeverityLevel.NORMAL,
      gamificationPoints: 0,
      parentId: '11111111-1111-4111-8111-111111111111',
    },
    {
      childId: 'cccccccc-2222-4111-8111-111111111111',
      fullName: 'Tran Gia Bao',
      dob: new Date('2017-09-20'),
      gender: Gender.MALE,
      height: 125,
      weight: 25,
      familyMedicalHistory: 'Bố có tiền sử bàn chân bẹt.',
      severityLevel: SeverityLevel.LEVEL_1,
      gamificationPoints: 50,
      parentId: '11111111-1111-4111-8111-111111111111',
    },
    {
      childId: 'cccccccc-3333-4222-8222-222222222222',
      fullName: 'Le Ngoc Anh',
      dob: new Date('2019-03-15'),
      gender: Gender.FEMALE,
      height: 110,
      weight: 18,
      familyMedicalHistory: null,
      severityLevel: SeverityLevel.LEVEL_2,
      gamificationPoints: 100,
      parentId: '22222222-2222-4222-8222-222222222222',
    },
    {
      childId: 'cccccccc-4444-4222-8222-222222222222',
      fullName: 'Pham Duc Huy',
      dob: new Date('2016-11-08'),
      gender: Gender.MALE,
      height: 135,
      weight: 32,
      familyMedicalHistory:
        'Có người thân từng gặp vấn đề về cấu trúc bàn chân.',
      severityLevel: SeverityLevel.LEVEL_3,
      gamificationPoints: 150,
      parentId: '22222222-2222-4222-8222-222222222222',
    },
  ];

  await childRepository.save(children);
}

import { AppDataSource } from '../data-source.js';
import { User } from '../../modules/users/entities/user.entity.js';
import { Parent } from '../../modules/users/entities/parent.entity.js';
import { Doctor } from '../../modules/users/entities/doctor.entity.js';
import { UserRole, UserStatus } from '../../modules/users/enums/user.enum.js';

export async function seedUsers() {
  const userRepository = AppDataSource.getRepository(User);
  const parentRepository = AppDataSource.getRepository(Parent);
  const doctorRepository = AppDataSource.getRepository(Doctor);

  const users = [
    {
      userId: '11111111-1111-4111-8111-111111111111',
      fullName: 'Nguyen Van An',
      email: 'an.parent@gmail.com',
      phone: '0901234567',
      passwordHash: 'hashed_password_123',
      role: UserRole.PARENT,
      status: UserStatus.ACTIVE,
    },
    {
      userId: '22222222-2222-4222-8222-222222222222',
      fullName: 'Tran Thi Binh',
      email: 'binh.parent@gmail.com',
      phone: '0902345678',
      passwordHash: 'hashed_password_123',
      role: UserRole.PARENT,
      status: UserStatus.ACTIVE,
    },
    {
      userId: '33333333-3333-4333-8333-333333333333',
      fullName: 'Le Van Cuong',
      email: 'cuong.doctor@gmail.com',
      phone: '0903456789',
      passwordHash: 'hashed_password_123',
      role: UserRole.DOCTOR,
      status: UserStatus.ACTIVE,
    },
    {
      userId: '44444444-4444-4444-8444-444444444444',
      fullName: 'Pham Thi Dung',
      email: 'dung.doctor@gmail.com',
      phone: '0904567890',
      passwordHash: 'hashed_password_123',
      role: UserRole.DOCTOR,
      status: UserStatus.ACTIVE,
    },
    {
      userId: '55555555-5555-4555-8555-555555555555',
      fullName: 'Admin System',
      email: 'admin@gmail.com',
      phone: '0905678901',
      passwordHash: 'hashed_password_123',
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
    },
  ];

  await userRepository.save(users);

  const parents = [
    {
      userId: '11111111-1111-4111-8111-111111111111',
      address: 'Ho Chi Minh City',
    },
    {
      userId: '22222222-2222-4222-8222-222222222222',
      address: 'Dong Nai',
    },
  ];

  await parentRepository.save(parents);

  const doctors = [
    {
      userId: '33333333-3333-4333-8333-333333333333',
      specialty: 'Pediatric Orthopedics',
      licenseNumber: 'BS001',
      clinic: 'Children Hospital',
    },
    {
      userId: '44444444-4444-4444-8444-444444444444',
      specialty: 'Rehabilitation',
      licenseNumber: 'BS002',
      clinic: 'Rehabilitation Center',
    },
  ];

  await doctorRepository.save(doctors);
}

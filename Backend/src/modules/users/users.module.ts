import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { User } from './entities/user.entity.js';
import { Parent } from './entities/parent.entity.js';
import { Doctor } from './entities/doctor.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([User, Parent, Doctor])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

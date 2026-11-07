import { Module } from '@nestjs/common';
import { ChildProfilesService } from './child-profiles.service.js';
import { ChildProfilesController } from './child-profiles.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildProfile } from './entities/child-profile.entity.js';
import { FootImage } from './entities/foot-image.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ChildProfile, FootImage])],
  controllers: [ChildProfilesController],
  providers: [ChildProfilesService],
})
export class ChildProfilesModule {}

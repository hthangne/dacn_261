import { Module } from '@nestjs/common';
import { ConservationService } from './conversation.service.js';
import { ConservationController } from './conversation.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity.js';
@Module({
  imports: [TypeOrmModule.forFeature([Conversation])],
  controllers: [ConservationController],
  providers: [ConservationService],
})
export class ConservationModule {}

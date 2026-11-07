import { Module } from '@nestjs/common';
import { ConsultationMessagesService } from './consultation-messages.service.js';
import { ConsultationMessagesController } from './consultation-messages.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultationMessage } from './entities/consultation-message.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultationMessage])],
  controllers: [ConsultationMessagesController],
  providers: [ConsultationMessagesService],
})
export class ConsultationMessagesModule {}

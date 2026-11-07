import { Injectable } from '@nestjs/common';
import { CreateConsultationMessageDto } from './dto/create-consultation-message.dto.js';
import { UpdateConsultationMessageDto } from './dto/update-consultation-message.dto.js';

@Injectable()
export class ConsultationMessagesService {
  create(createConsultationMessageDto: CreateConsultationMessageDto) {
    return 'This action adds a new consultationMessage';
  }

  findAll() {
    return `This action returns all consultationMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultationMessage`;
  }

  update(id: number, updateConsultationMessageDto: UpdateConsultationMessageDto) {
    return `This action updates a #${id} consultationMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultationMessage`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultationMessagesService } from './consultation-messages.service.js';
import { CreateConsultationMessageDto } from './dto/create-consultation-message.dto.js';
import { UpdateConsultationMessageDto } from './dto/update-consultation-message.dto.js';

@Controller('consultation-messages')
export class ConsultationMessagesController {
  constructor(private readonly consultationMessagesService: ConsultationMessagesService) {}

  @Post()
  create(@Body() createConsultationMessageDto: CreateConsultationMessageDto) {
    return this.consultationMessagesService.create(createConsultationMessageDto);
  }

  @Get()
  findAll() {
    return this.consultationMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultationMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultationMessageDto: UpdateConsultationMessageDto) {
    return this.consultationMessagesService.update(+id, updateConsultationMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultationMessagesService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateConservationDto } from './dto/create-conservation.dto.js';
import { UpdateConservationDto } from './dto/update-conservation.dto.js';

@Injectable()
export class ConservationService {
  create(createConservationDto: CreateConservationDto) {
    return 'This action adds a new conservation';
  }

  findAll() {
    return `This action returns all conservation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conservation`;
  }

  update(id: number, updateConservationDto: UpdateConservationDto) {
    return `This action updates a #${id} conservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conservation`;
  }
}

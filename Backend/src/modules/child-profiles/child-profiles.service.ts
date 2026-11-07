import { Injectable } from '@nestjs/common';
import { CreateChildProfileDto } from './dto/create-child-profile.dto.js';
import { UpdateChildProfileDto } from './dto/update-child-profile.dto.js';

@Injectable()
export class ChildProfilesService {
  create(createChildProfileDto: CreateChildProfileDto) {
    return 'This action adds a new childProfile';
  }

  findAll() {
    return `This action returns all childProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} childProfile`;
  }

  update(id: number, updateChildProfileDto: UpdateChildProfileDto) {
    return `This action updates a #${id} childProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} childProfile`;
  }
}

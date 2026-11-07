import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChildProfilesService } from './child-profiles.service.js';
import { CreateChildProfileDto } from './dto/create-child-profile.dto.js';
import { UpdateChildProfileDto } from './dto/update-child-profile.dto.js';

@Controller('child-profiles')
export class ChildProfilesController {
  constructor(private readonly childProfilesService: ChildProfilesService) {}

  @Post()
  create(@Body() createChildProfileDto: CreateChildProfileDto) {
    return this.childProfilesService.create(createChildProfileDto);
  }

  @Get()
  findAll() {
    return this.childProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childProfilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildProfileDto: UpdateChildProfileDto) {
    return this.childProfilesService.update(+id, updateChildProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childProfilesService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentPlansService } from './treatment-plans.service.js';
import { CreateTreatmentPlanDto } from './dto/create-treatment-plan.dto.js';
import { UpdateTreatmentPlanDto } from './dto/update-treatment-plan.dto.js';

@Controller('treatment-plans')
export class TreatmentPlansController {
  constructor(private readonly treatmentPlansService: TreatmentPlansService) {}

  @Post()
  create(@Body() createTreatmentPlanDto: CreateTreatmentPlanDto) {
    return this.treatmentPlansService.create(createTreatmentPlanDto);
  }

  @Get()
  findAll() {
    return this.treatmentPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentPlansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreatmentPlanDto: UpdateTreatmentPlanDto) {
    return this.treatmentPlansService.update(+id, updateTreatmentPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatmentPlansService.remove(+id);
  }
}

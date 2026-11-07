import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TreatmentPlanHistoryService } from './treatment-plan-history.service.js';
import { CreateTreatmentPlanHistoryDto } from './dto/create-treatment-plan-history.dto.js';
import { UpdateTreatmentPlanHistoryDto } from './dto/update-treatment-plan-history.dto.js';

@Controller('treatment-plan-history')
export class TreatmentPlanHistoryController {
  constructor(private readonly treatmentPlanHistoryService: TreatmentPlanHistoryService) {}

  @Post()
  create(@Body() createTreatmentPlanHistoryDto: CreateTreatmentPlanHistoryDto) {
    return this.treatmentPlanHistoryService.create(createTreatmentPlanHistoryDto);
  }

  @Get()
  findAll() {
    return this.treatmentPlanHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.treatmentPlanHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTreatmentPlanHistoryDto: UpdateTreatmentPlanHistoryDto) {
    return this.treatmentPlanHistoryService.update(+id, updateTreatmentPlanHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.treatmentPlanHistoryService.remove(+id);
  }
}

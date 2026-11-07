import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressReportsService } from './progress-reports.service.js';
import { CreateProgressReportDto } from './dto/create-progress-report.dto.js';
import { UpdateProgressReportDto } from './dto/update-progress-report.dto.js';

@Controller('progress-reports')
export class ProgressReportsController {
  constructor(private readonly progressReportsService: ProgressReportsService) {}

  @Post()
  create(@Body() createProgressReportDto: CreateProgressReportDto) {
    return this.progressReportsService.create(createProgressReportDto);
  }

  @Get()
  findAll() {
    return this.progressReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressReportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgressReportDto: UpdateProgressReportDto) {
    return this.progressReportsService.update(+id, updateProgressReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressReportsService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProgressReportDto } from './dto/create-progress-report.dto.js';
import { UpdateProgressReportDto } from './dto/update-progress-report.dto.js';

@Injectable()
export class ProgressReportsService {
  create(createProgressReportDto: CreateProgressReportDto) {
    return 'This action adds a new progressReport';
  }

  findAll() {
    return `This action returns all progressReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progressReport`;
  }

  update(id: number, updateProgressReportDto: UpdateProgressReportDto) {
    return `This action updates a #${id} progressReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} progressReport`;
  }
}

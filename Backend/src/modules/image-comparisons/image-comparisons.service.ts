import { Injectable } from '@nestjs/common';
import { CreateImageComparisonDto } from './dto/create-image-comparison.dto.js';
import { UpdateImageComparisonDto } from './dto/update-image-comparison.dto.js';

@Injectable()
export class ImageComparisonsService {
  create(createImageComparisonDto: CreateImageComparisonDto) {
    return 'This action adds a new imageComparison';
  }

  findAll() {
    return `This action returns all imageComparisons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imageComparison`;
  }

  update(id: number, updateImageComparisonDto: UpdateImageComparisonDto) {
    return `This action updates a #${id} imageComparison`;
  }

  remove(id: number) {
    return `This action removes a #${id} imageComparison`;
  }
}

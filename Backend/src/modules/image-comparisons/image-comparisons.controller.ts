import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageComparisonsService } from './image-comparisons.service.js';
import { CreateImageComparisonDto } from './dto/create-image-comparison.dto.js';
import { UpdateImageComparisonDto } from './dto/update-image-comparison.dto.js';

@Controller('image-comparisons')
export class ImageComparisonsController {
  constructor(private readonly imageComparisonsService: ImageComparisonsService) {}

  @Post()
  create(@Body() createImageComparisonDto: CreateImageComparisonDto) {
    return this.imageComparisonsService.create(createImageComparisonDto);
  }

  @Get()
  findAll() {
    return this.imageComparisonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageComparisonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageComparisonDto: UpdateImageComparisonDto) {
    return this.imageComparisonsService.update(+id, updateImageComparisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageComparisonsService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { ImageComparisonsService } from './image-comparisons.service.js';
import { ImageComparisonsController } from './image-comparisons.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageComparison } from './entities/image-comparison.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([ImageComparison])],
  controllers: [ImageComparisonsController],
  providers: [ImageComparisonsService],
})
export class ImageComparisonsModule {}

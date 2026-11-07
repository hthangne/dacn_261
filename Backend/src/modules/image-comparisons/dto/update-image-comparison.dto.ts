import { PartialType } from '@nestjs/swagger';
import { CreateImageComparisonDto } from './create-image-comparison.dto.js';

export class UpdateImageComparisonDto extends PartialType(CreateImageComparisonDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateConservationDto } from './create-conservation.dto.js';

export class UpdateConservationDto extends PartialType(CreateConservationDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateChildProfileDto } from './create-child-profile.dto.js';

export class UpdateChildProfileDto extends PartialType(CreateChildProfileDto) {}

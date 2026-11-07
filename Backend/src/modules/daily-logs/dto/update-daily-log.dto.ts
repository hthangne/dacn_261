import { PartialType } from '@nestjs/swagger';
import { CreateDailyLogDto } from './create-daily-log.dto.js';

export class UpdateDailyLogDto extends PartialType(CreateDailyLogDto) {}

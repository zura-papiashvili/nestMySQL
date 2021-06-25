import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

enum SortDir {
  DESC = 'DESC',
  ASC = 'ASC',
}

export class getAllTripsDTO {
  @IsOptional()
  @IsNumber()
  minPrice?: number;
  @IsOptional()
  @IsNumber()
  maxPrice?: number;
  @IsOptional()
  @IsString()
  sortBy?: string;
  @IsEnum(SortDir)
  sortDir?: SortDir;
  @IsOptional()
  @IsNumber()
  page?: number;
  @IsOptional()
  @IsNumber()
  limit?: number;
}

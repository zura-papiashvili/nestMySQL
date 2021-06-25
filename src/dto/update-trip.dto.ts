import { IsNumber, IsOptional, IsString } from 'class-validator';

export class updateTripDTO {
  @IsNumber()
  id: number;
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsNumber()
  price?: number;
  @IsOptional()
  @IsString()
  destination?: string;
  @IsOptional()
  @IsString()
  description?: string;
}

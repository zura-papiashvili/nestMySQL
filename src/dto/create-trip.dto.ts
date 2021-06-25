import { IsNumber, IsString } from 'class-validator';

export class createTripDTO {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsNumber()
  rating: number;
  @IsString()
  destination: string;
  @IsString()
  description: string;
}

import { Get, Param } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { createTripDTO } from 'src/dto/create-trip.dto';
import { updateTripDTO } from 'src/dto/update-trip.dto';
import { getAllTripsDTO } from 'src/dto/get-all-trips.dto';
import {
  getErrorMessage,
  getSuccessMessage,
} from 'src/utils/response-functions.utils';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripService: TripsService) {}
  @Get()
  async getAllTrips(@Query() data: getAllTripsDTO) {
    try {
      const allTrips = await this.tripService.getAllTrips(data);
      return getSuccessMessage(allTrips);
    } catch (err) {
      return getErrorMessage(err);
    }
  }
  @Post()
  async createTrip(@Body() data: createTripDTO) {
    try {
      const newTrip = await this.tripService.createTrip(data);
      return getSuccessMessage(newTrip);
    } catch (err) {
      getErrorMessage(err);
    }
  }
  @Patch()
  async updateTrip(@Body() data: updateTripDTO) {
    try {
      const updatedTrip = await this.tripService.updateTrip(data);
      return getSuccessMessage(updatedTrip);
    } catch (err) {
      return getErrorMessage(err);
    }
  }
  @Delete('/:id')
  async deleteTrip(@Param('id') id: string) {
    try {
      await this.tripService.deleteTrip(Number(id));
      return getSuccessMessage(
        'Post with id ' + id + ' has been successfuly deleted',
      );
    } catch (err) {
      return getErrorMessage(err);
    }
  }
}

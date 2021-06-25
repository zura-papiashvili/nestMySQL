import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createTripDTO } from 'src/dto/create-trip.dto';
import { getAllTripsDTO } from 'src/dto/get-all-trips.dto';
import { TripEntity } from 'src/entities/trip.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TripsService {
  constructor(
    @InjectRepository(TripEntity)
    private tripRepository: Repository<TripEntity>,
  ) {}

  async getAllTrips(data: getAllTripsDTO) {
    const queryBuilder = this.tripRepository.createQueryBuilder();
    queryBuilder.where('isDeleted=false');
    if (data.minPrice) {
      queryBuilder.andWhere('price > :minPrice', {
        minPrice: data.minPrice,
      });
    }
    if (data.maxPrice) {
      queryBuilder.andWhere('price < :maxPrice', {
        maxPrice: data.maxPrice,
      });
    }
    if (data.sortBy) {
      queryBuilder.orderBy(data.sortBy, 'ASC');
    }
    if (data.limit) {
      const limit = Math.min(data.limit, 5);
      queryBuilder.limit(limit);
      if (data.page) {
        const page = data.page + 1;
        queryBuilder.offset(page * limit);
      }
    } else {
      queryBuilder.limit(5);
    }

    return await queryBuilder.getMany();
  }

  async createTrip(data: createTripDTO) {
    const newTrip: TripEntity = new TripEntity();
    newTrip.name = data.name;
    newTrip.destination = data.destination;
    newTrip.price = data.price;
    newTrip.rating = 0;
    newTrip.description = data.description;
    newTrip.user = data.userId;

    return await this.tripRepository.save(newTrip);
  }
  async updateTrip(data) {
    const updatedTrip = await this.tripRepository.save({
      ...data,
    });
    return updatedTrip;
  }

  async deleteTrip(id: number) {
    const deletedTrip = await this.tripRepository.save({
      id: id,
      isDeleted: true,
    });
    return deletedTrip;
  }
}

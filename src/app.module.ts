import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripEntity } from './entities/trip.entity';

import { TripsModule } from './modules/trips/trips.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'papiashviliz',
      password: 'nest1234',
      database: 'nestproject',
      entities: [TripEntity],
      synchronize: true,
    }),
    TripsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

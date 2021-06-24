import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trips')
export class TripEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;
  @Column('float')
  price: number;
  @Column('float')
  rating: number;
  @Column({
    type: 'varchar',
    length: 50,
  })
  destination: string;

  @Column({
    type: 'varchar',
    length: 1500,
  })
  description: string;
}

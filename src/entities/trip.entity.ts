import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

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

  @Column({
    type: 'boolean',
    default: false,
  })
  isDeleted: boolean;
  @ManyToOne(() => UserEntity, (user) => user.id)
  user: number;
}

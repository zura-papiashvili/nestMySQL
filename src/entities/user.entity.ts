import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    length: 100,
  })
  fullName: string;
  @Column({
    type: 'varchar',
    length: 50,
  })
  email: string;
  @Column({
    type: 'varchar',
    length: 50,
  })
  hash: string;
  @Column({
    type: 'varchar',
    length: 50,
  })
  token: string;
}

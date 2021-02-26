import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('test')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: number;

  @Column()
  test2: number;

  @Column()
  test3: number;
}
export default User;

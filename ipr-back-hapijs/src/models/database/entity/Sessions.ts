import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './User';

@Entity('sessions')
class Sessions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
export default Sessions;

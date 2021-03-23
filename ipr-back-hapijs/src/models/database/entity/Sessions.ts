import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  Generated,
} from 'typeorm';
import User from './User';

@Entity('sessions')
class Sessions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', unique: true })
  @Generated('uuid')
  token: string;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;
}
export default Sessions;

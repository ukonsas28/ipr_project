import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Sessions from './Sessions';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  firstName: string;

  @Column({ type: 'varchar', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', unique: true, default: '', nullable: false })
  login: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToMany(() => Sessions, (sessions) => sessions.id)
  sessions: Sessions[];
}
export default User;

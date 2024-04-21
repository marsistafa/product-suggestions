import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Suggestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default : 'TITLE'})
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column({ default: 0 })
  votes: number;

  @Column({ default: false})
  isPrivate: boolean;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Suggestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column({ default: 0 })
  votes: number;
}

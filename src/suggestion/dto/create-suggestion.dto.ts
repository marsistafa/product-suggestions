import { IsNotEmpty, IsString } from 'class-validator';
import { FindOperator } from 'typeorm';

export class CreateSuggestionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;
  id: number | FindOperator<number>;
  votes: number;
  isPrivate: boolean;
}

import { IsNotEmpty, IsString } from 'class-validator';

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
}

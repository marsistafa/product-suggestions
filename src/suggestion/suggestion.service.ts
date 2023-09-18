import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Suggestion } from 'src/entity/suggestion.entity';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';


@Injectable()
export class SuggestionService {
  constructor(
    @InjectRepository(Suggestion)
    private readonly suggestionRepository: Repository<Suggestion>,
  ) {}

  async getAllSuggestions(): Promise<Suggestion[]> {
    return this.suggestionRepository.find();
  }

  async createSuggestion(createSuggestionDto: CreateSuggestionDto): Promise<Suggestion> {
    const suggestion = new Suggestion();
    suggestion.title = createSuggestionDto.title;
    suggestion.description = createSuggestionDto.description;
    suggestion.category = createSuggestionDto.category;

    return this.suggestionRepository.save(suggestion);
  }
}

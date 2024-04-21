import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Suggestion } from 'src/entity/suggestion.entity';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';


@Injectable()
export class SuggestionService {
  
  async updateSuggestion(suggestionId: number, createSuggestionDto: CreateSuggestionDto) {
    const options: FindOneOptions<Suggestion> = {
      where: { id: suggestionId }
    };
  
    const suggestion = await this.suggestionRepository.findOne(options);
    if (!suggestion) {
      
      throw new NotFoundException('Suggestion not found');
    }
  
    // Update suggestion properties
    suggestion.title = createSuggestionDto.title;
    suggestion.description = createSuggestionDto.description;
    suggestion.votes = createSuggestionDto.votes;
    suggestion.isPrivate = createSuggestionDto.isPrivate;
  
    return await this.suggestionRepository.save(suggestion);
  }

  constructor(
    @InjectRepository(Suggestion)
    private readonly suggestionRepository: Repository<Suggestion>,
  ) {}

  async getAllSuggestions(): Promise<Suggestion[]> {
    return this.suggestionRepository.find(
      {
        where: {
            isPrivate: false,
        }

      }
    );
  }
  
  async createSuggestion(createSuggestionDto: CreateSuggestionDto): Promise<Suggestion> {
    const suggestion = new Suggestion();
    suggestion.title = createSuggestionDto.title;
    suggestion.description = createSuggestionDto.description;
    suggestion.category = createSuggestionDto.category;
    suggestion.isPrivate = createSuggestionDto.isPrivate;

    return this.suggestionRepository.save(suggestion);
  }
}

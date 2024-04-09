import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { SuggestionService } from './suggestion.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';

@Controller('suggestions')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Get()
  async getAllSuggestions() {
    return this.suggestionService.getAllSuggestions();
  }

  @Post()
  async createSuggestion(@Body() createSuggestionDto: CreateSuggestionDto) {
    return this.suggestionService.createSuggestion(createSuggestionDto);
  }

  @Put(':id')
  async updateSuggestion(@Param('id') suggestionId: number, @Body() createSuggestionDto: CreateSuggestionDto) {
    return this.suggestionService.updateSuggestion(suggestionId, createSuggestionDto);
  }
}

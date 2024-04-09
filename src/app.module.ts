import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { SuggestionController } from './suggestion/suggestion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suggestion } from './entity/suggestion.entity';
import { SuggestionService } from './suggestion/suggestion.service';
import config from "./ormconfig";



@Module({
  imports: [ProductModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Suggestion]),
  ],
  controllers: [AppController,  ProductController, SuggestionController],
  providers: [AppService, ProductService, SuggestionService],
})
export class AppModule {}

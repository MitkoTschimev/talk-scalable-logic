import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController, TodosController],
  providers: [TodosService, CatsService]
})
export class CatsModule {}

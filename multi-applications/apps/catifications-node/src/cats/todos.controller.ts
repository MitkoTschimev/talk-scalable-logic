import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Put,
  Param
} from '@nestjs/common';
import { Todo } from '@multi-applications/shared/cat-utils';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  @HttpCode(204)
  create(@Body('text') text: string, @Body('catId') catId: number) {
    this.todosService.create(text, catId);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() todo: Todo) {
    this.todosService.update(+id, todo);
  }
}

import { Injectable } from '@nestjs/common';
import { Todo } from '@multi-applications/shared/cat-utils';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];
  private todoIdCount = 1;

  constructor() {
    const activities = ['Clean', 'Feed', 'Go to doctor', 'Play'];

    activities.forEach(activity => {
      if (Math.random()) {
        this.todos.push({
          id: this.todoIdCount++,
          done: false,
          text: activity,
          catId: Math.floor(Math.random() * 6) + 1
        });
      }
    });
  }

  create(text: string, catId: number) {
    this.todos.push({
      id: this.todoIdCount++,
      text,
      catId,
      done: false
    });
  }

  update(id: number, todo: Todo) {
    console.log(typeof id);
    const updateTodo = this.todos.find(t => t.id === id);
    console.log(updateTodo);
    updateTodo.text = todo.text;
    updateTodo.done = todo.done;
    updateTodo.catId = todo.catId;
  }

  findAll(): Todo[] {
    return this.todos;
  }
}

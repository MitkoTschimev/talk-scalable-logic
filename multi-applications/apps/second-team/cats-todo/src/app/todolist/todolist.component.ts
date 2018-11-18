import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {
  TodosService,
  CatsService,
  Cat,
  Todo,
  getCatById
} from '@multi-applications/shared/cat-utils';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'multi-applications-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todo: TodoListView[] = [];

  done: TodoListView[] = [];

  cats: Cat[] = [];

  constructor(
    private todosService: TodosService,
    private catsService: CatsService
  ) {
    this.loadData();
  }

  private loadData() {
    forkJoin(
      this.todosService.getTodosList(),
      this.catsService.getCatList()
    ).subscribe(([todos, cats]) => {
      this.todo = todos.filter(todo => !todo.done).map(todo => {
        return { ...todo, cat: getCatById(cats, todo.catId) } as TodoListView;
      });
      this.done = todos.filter(todo => todo.done).map(todo => {
        return { ...todo, cat: getCatById(cats, todo.catId) } as TodoListView;
      });
      this.cats = cats;
    });
  }

  drop(event: CdkDragDrop<TodoListView[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const todo = event.container.data[event.currentIndex];
      todo.done = !todo.done;
      this.todosService.updateTodo(todo).subscribe();
    }
  }
}

interface TodoListView extends Todo {
  cat: Cat;
}

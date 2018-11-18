import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodosList(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  updateTodo(todo: Todo) {
    return this.http.put(`http://localhost:3000/todos/${todo.id}`, todo);
  }
}

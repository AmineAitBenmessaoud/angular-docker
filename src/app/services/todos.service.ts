import { inject,Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({ //means can be injected into other components
  providedIn: 'root' // means it is available to the entire app
})
export class TodosService {
  http = inject(HttpClient);
  getTodosFromApi() {
    return this.http.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos');
   }
}


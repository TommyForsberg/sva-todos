import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getTodos(personId: number): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl);
  }
}

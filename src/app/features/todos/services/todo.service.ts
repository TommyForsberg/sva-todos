import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(userId: number): Observable<Todo[]>{
    return this.http.get<Todo[]>(`users/${userId}/todos`);
  }
}

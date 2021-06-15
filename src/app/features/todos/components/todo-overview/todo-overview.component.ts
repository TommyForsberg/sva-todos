import { Component, OnInit } from '@angular/core';
import { merge, Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, mapTo, mergeMap, } from 'rxjs/operators';
import { Todo } from '../../models/todo';
import { User } from '../../models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  constructor(private todoService: TodoService, private userService: UserService) { }

  users!: Observable<User[]>
  selectedUserId!: ReplaySubject<number>;
  userTodos!: Observable<Todo[]>;
  loading!: Observable<boolean>;

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.selectedUserId = new ReplaySubject<number>();
    this.userTodos = this.selectedUserId.pipe(mergeMap(id => this.todoService.getTodos(id)
      .pipe(
        catchError((err) => {
          //error handling should be done here
          console.error(err);
          return throwError(err);
        }))));

    this.loading = merge(...[this.selectedUserId.pipe(
      mapTo(true)),
    this.userTodos.pipe(mapTo(false))]);
  }
}


catchError((err) => {
  console.log('error caught in service')
  console.error(err);

  return throwError(err);
})
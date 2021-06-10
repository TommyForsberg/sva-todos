import { Component, OnInit } from '@angular/core';
import { merge,  Observable, ReplaySubject } from 'rxjs';
import { mapTo, mergeMap, } from 'rxjs/operators';
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

  users: Observable<User[]> = this.userService.getUsers();
  selectedUserId: ReplaySubject<number> = new ReplaySubject<number>();
  userTodos: Observable<Todo[]> = this.selectedUserId.pipe(mergeMap(id => this.todoService.getTodos(id)));
  spin: Observable<boolean> = merge(...[this.selectedUserId.pipe(
  mapTo(true)),
  this.userTodos.pipe(mapTo(false))]);

  ngOnInit(): void {

  }
}



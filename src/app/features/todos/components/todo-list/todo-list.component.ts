import { Component, Input, OnChanges } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnChanges {
  @Input() todos: Todo[] | null= []; 
  page = 1;
  pageSize = 10;
  collectionSize: number = 0;
  constructor() { }

  ngOnChanges(): void {
    this.collectionSize = this.todos? this.todos.length : 0;
  }

}

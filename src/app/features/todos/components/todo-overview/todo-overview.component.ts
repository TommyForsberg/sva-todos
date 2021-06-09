import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.service.getTodos(1).subscribe(r => console.log(r));
  }

}

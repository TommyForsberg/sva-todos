import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '',  component: TodoOverviewComponent }
];
export const routing = RouterModule.forChild(routes);
@NgModule({
  declarations: [
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    routing,
    CommonModule
  ],
  entryComponents:[
      TodoOverviewComponent
  ]
})
export class TodoModule { }

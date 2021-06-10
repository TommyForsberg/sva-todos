import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './features/start/start.component';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () => import('./features/todos/todo.module').then(m => m.TodoModule)
  },
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

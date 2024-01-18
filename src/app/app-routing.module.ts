import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [{path:'', component:AuthComponent},
                        {path:'todo', component:TodosComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

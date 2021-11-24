import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/authguard';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "user/:id", component: UserComponent, canActivate: [AuthGuard] },
  { path: "todo-list", component: TodoListComponent },
  { path: "todo", component: AddTodoComponent, canActivate: [AuthGuard] },
  { path: "todo/:id", component: AddTodoComponent, canActivate: [AuthGuard] },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "page-not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

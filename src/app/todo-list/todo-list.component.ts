import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../add-todo/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any = [];
  userData: any;

  constructor(private todoService: TodoService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem("userData") || "{}");
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodos().subscribe(data => {
      this.todos = data;
      // console.log("todo list", this.todos);
    });
  }

  onAddTodo() {
    this.router.navigate(['todo']);
  }

  onEditTodo(id: string) {
    this.router.navigate(['todo', id]);

  }

  onDeleteTodo(id: string) {
    let deleteItem = confirm("Do you really want to delete this record?");
    // console.log(deleteItem)
    if (deleteItem) {
      this.todoService.deleteTodo(id).subscribe(data => {
        this.getAllTodos();
      });
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // todo: Todo[] = [];
  todo = <Todo>{};
  mode: string | undefined;
  id: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.getTodoById(this.id);
        this.mode = 'Edit';
      } else {
        this.todo['id'] = "0";
        this.mode = 'Add';
      }
    });
  }

  ngOnInit(): void {

  }

  getTodoById(id:string){
    this.todoService.getTodoById(id).subscribe((data:any) => {
      this.todo = data[0];
      // console.log(this.todo);
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.todoService.updateTodos(this.todo).subscribe(data => {
        // console.log("Data saved successfully", data);
        this.router.navigate(['/todo-list']);
      });
    } else {
      alert("Please enter all the details")
    }
  }

  onCancel() {
    this.router.navigate(['todo-list']);
  }
}

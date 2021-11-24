import { Injectable } from "@angular/core";
import { Todo } from "../add-todo/todo.model";
import { HttpService } from "./http.service";

@Injectable()
export class TodoService {
    public todos = [/* {
        id: 1,
        name: 'Suresh',
        email: 'suresh@gmail.com',
        task: "task 1",
        isCompleted: false
    },
    {
        id: 2,
        name: 'Ramesh',
        email: 'ramesh@gmail.com',
        task: "task 2",
        isCompleted: true
    } */];

    constructor(private httpService: HttpService) {

    }

    getAllTodos() {
        return this.httpService.doGet("/todo");
    }

    getTodoById(id: any) {
        return this.httpService.doGet("/todo/" + id);
    }

    updateTodos(todo: Todo) {
        if (todo.id === "0") {
            return this.httpService.doPost("/todo", todo);
        } else {
            return this.httpService.doPatch("/todo/" + todo.id, todo);
        }
    }

    deleteTodo(id: string) {
        return this.httpService.doDelete("/todo/" + id,)
    }

}
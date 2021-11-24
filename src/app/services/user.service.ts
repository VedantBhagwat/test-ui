import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../create-user/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [/* {
    id: 1,
    email: "user1@gmail.com",
    password: "user1"
  },
  {
    id: 2,
    email: "user2@gmail.com",
    password: "user2"
  },
  {
    id: 3,
    email: "user3@gmail.com",
    password: "user3"
  } */];

  /* private messageSource = new BehaviorSubject<object>({ isLoggedIn: false });
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: object) {
    this.messageSource.next(message);
  } */


  constructor(private router: Router, private httpService: HttpService) {

  }

  fetchAllUsers() {
    // let userlist = localStorage.getItem("userList");
    // if(!userlist){
    //   localStorage.setItem("userList", JSON.stringify(this.users));
    // }
  }

  onCreateUser(email: string, password: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = re.test(String(email).toLowerCase());
    if (!validEmail) {
      alert("Please enter valid email address");
      return null;
    } else {
      return this.httpService.doPost("/users", { "email": email, "password": password })
    }
  }

  onValidateUser(email: string, password: string) {
    let data = {
      email: email,
      password: password
    }
    return this.httpService.doLoginPost("/auth/login", data);
  }

  getUser(id: number) {
    // let data = this.users.find((user) => user.id == id)
    // return data;
  }

  isLoggedIn() {
    if (localStorage.getItem('access_token')) {
      return true;
    } else {
      return false;
    }
  }

  onLogOut() {
    localStorage.clear();
    // this.changeMessage({ isLoggedIn: false })
    this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.userService.onCreateUser(this.email, this.password)?.subscribe(data => {
      // console.log("user created successfully", data);
      alert("User has been created successfully!");
      this.router.navigate(['login']);

    }, error => {
      // console.log(error);
      alert("User already exists");
    });
  }

}

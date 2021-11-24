import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private userService: UserService, private router: Router) {
    this.userService.fetchAllUsers();
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService.onValidateUser(this.email, this.password).subscribe((data: any) => {
      // console.log("Logged in", data);
      this.decodeJWT(data.access_token);
      localStorage.setItem("access_token", data.access_token);
    }, error => {
      // console.log("err", error);
      alert("Invalid credentials");
    }

    );
  }

  decodeJWT(data: string) {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(data);
    console.log(decodedToken);
    decodedToken.id = decodedToken.sub;
    localStorage.setItem("userData", JSON.stringify(decodedToken));
    this.router.navigate(["user", decodedToken.sub]);
  }

}

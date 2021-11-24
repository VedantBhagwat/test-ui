import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;
  loginStatus: any;

  constructor(private router: Router, private userService: UserService) {
    /* this.userService.currentMessage.subscribe(data => {
      this.loginStatus = data;
      console.log(this.loginStatus);
    }) */
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (this.userData && this.userData.id) {
      this.router.navigate(['user', this.userData.id]);
    } else {
      this.router.navigate(['login']);
    }
  }

}

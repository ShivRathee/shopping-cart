import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any = '';
  password: any = '';
  details: any;
  user: any;
  constructor(private router: Router, private userService: UserService) {
    this.details = localStorage.getItem('userCredentials');
    this.user = JSON.parse(this.details);
    this.userService.register(this.user.username, this.user.password);
  }

  login() {
    // this.router.navigate(['/products']);
    const user = this.userService.getUser(this.username);
    if (user && user.password === this.password) {
      this.router.navigate(['/product-view']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}

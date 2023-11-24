import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUsername: any = '';
  newPassword: any = '';

  constructor(private router: Router, private userService: UserService) {}

  register() {
    this.userService.register('admin', '123');
    const userCredentials = {
      username: this.newUsername,
      password: this.newPassword,
    };

    localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
    this.router.navigate(['/login']);
  }
}

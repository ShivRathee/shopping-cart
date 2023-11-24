import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [
    { username: 'admin', password: '123' },
  ];

  getUser(
    username: string
  ): { username: string; password: string } | undefined {
    return this.users.find((user) => user.username === username);
  }

  register(username: string, password: string): void {
    this.users.push({ username, password });
  }

  getDefaultUser(): { username: string; password: string } {
    return this.users[0];
  }
}

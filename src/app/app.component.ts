import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping_cart';

  constructor(private router: Router) {}

  shouldShowHeader() {
    const currentRoute = this.router.url;
    const routesWithoutHeader = ['/login', '/register'];
    return !routesWithoutHeader.includes(currentRoute);
  }
}

import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private authService = inject(Auth);
  isLoggedIn = signal<boolean>(false);

  ngOnInit() {
    this.authService.getIsAuthenticated().subscribe({
      next: (isLoggedin) => {
        this.isLoggedIn.set(isLoggedin);
      },
    });
  }
  logout() {
    this.authService.logout();
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  private authService = inject(Auth);
  private router = inject(Router);
  isLoggedIn = signal<boolean>(false);

  ngOnInit() {
    this.authService.getIsAuthenticated().subscribe({
      next: (isLoggedin) => {
        this.isLoggedIn.set(isLoggedin);
      },
    });
  }

  login() {
    this.authService.login('Ahmed', '1234');

    const targetRoute = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

    this.authService.redirectUrl = null;

    this.router.navigateByUrl(targetRoute);
  }

  logout() {
    this.authService.logout();
  }
}

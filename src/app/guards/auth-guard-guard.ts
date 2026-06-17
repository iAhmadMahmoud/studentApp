import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let authService = inject(Auth);
  let router = inject(Router);
  let loginStatus: boolean = false;

  authService.getIsAuthenticated().subscribe((val) => {
    loginStatus = val;
  });

  if (!loginStatus) {
    authService.redirectUrl = state.url;
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public redirectUrl: string | null = null;
  login(userName: string, password: string) {
    localStorage.setItem('token', 'asdfghjklqwertyuiopzxcvbnm.fghjklwertyuifgnm.dfghjkcvbngfhj');
    this.isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }
}

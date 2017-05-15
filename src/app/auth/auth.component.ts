import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div> {{ (user | async)?.uid }} </div>
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
  `,
})
export class AuthComponent {
  user: Observable<firebase.User>;

  constructor(public authService: AuthService, private router: Router) {
    this.user = authService.authUser();
  }

  login() {
    this.authService.login().then(() => this.router.navigate(['/competitions']));
  }

  logout() {
    this.authService.logout();
  }
}

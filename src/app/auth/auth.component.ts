import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from "@angular/router";

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

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => this.router.navigate(['/competitions']));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user$: Observable<firebase.User>;
  isNavbarCollapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.authUser();
  }

}

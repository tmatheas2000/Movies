import { Component, OnInit, inject } from '@angular/core';
import { Auth, onAuthStateChanged, signOut, user as userObservable } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: false,
})
export class MenuComponent implements OnInit {
  private auth = inject(Auth);
  user$: Observable<any>;
  loggedIn = false;
  user: any;

  constructor() {
    this.user$ = userObservable(this.auth);

    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      this.loggedIn = !!user;
    });
  }

  ngOnInit(): void {}

  logout(): void {
    signOut(this.auth);
  }
}
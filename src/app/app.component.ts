/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, HostListener } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

// const CurrentUser = gql`
//   query CurrentUser {
//     profile() {
//       username
//     }
//   }
// `;

interface QueryResponse{
  profile
}

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.component.scss'
  ],
  // <app-weight-info></app-weight-info>
  template: `
    <app-header *ngIf="user"></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  user: User;

  @HostListener('document:click', [])
  onClick() {
    document.body.classList.add('active');
  }

  constructor(
    private apollo: Apollo,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe(data => this.user = data);
    // this.apollo.query({
    //   query: CurrentUser
    // }).subscribe(({data}) => {
    //   console.log(data);
    // });
  }

}

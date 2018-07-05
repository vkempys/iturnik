import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model'
import 'rxjs/add/operator/map';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  userName: string;
  userPass: string;
  users: User[];
  loaded: boolean;
  showInputs: boolean;

  constructor(
    private readonly http: Http,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  selectUser(name: string) {
    this.userName = name;
    this.showInputs = true;
  }

  isNewUser() {
    return !this.users.some(user => user.username === this.userName);
  }

  login() {
    this.authService.login(this.userName, this.userPass).subscribe(() => this.redirect());
  }

  signup() {
    this.authService.signup(this.userName, this.userPass).subscribe(() => this.redirect());
  }

  private redirect() {
    this.router.navigate(['/']);
  }

  private getUsers() {
    this.http.get('/api/users')
      .map(resp => resp.json())
      .subscribe(data => {
        this.users = data;
        this.loaded = true;
      });
  }

}
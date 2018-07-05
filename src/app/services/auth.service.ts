import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user$: BehaviorSubject<User>;

  constructor(
    private readonly http: Http
  ) {
    const storageData = sessionStorage.getItem('user');
    const user = storageData ? JSON.parse(storageData) : null;
    this.user$ = new BehaviorSubject(user);
  }

  login(name: string, pass: string) {
    return this.getApiData('/api/auth/login', name, pass);
  }

  logout() {
    sessionStorage.removeItem('user');
    this.user$.next(null);
  }

  signup(name: string, pass: string) {
    return this.getApiData('/api/auth/signup', name, pass)
  }

  private getApiData(url: string, name: string, pass: string) {
    return this.http.post(url, {
      username: name,
      password: pass,
    })
    .map(resp => resp.json())
    .do((data) => sessionStorage.setItem('user', JSON.stringify(data)))
    .do((data) => this.user$.next(data))
  }

  
}

import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  styleUrls: [ './app-header.component.scss' ],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  user: User;
  weightValue: string;
  
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService

  ) {}

  ngOnInit() {
    this.authService.user$.subscribe(data => this.user = data);
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }
}
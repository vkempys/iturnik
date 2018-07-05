import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { AuthGuard } from './services/auth.guard';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**',    component: NoContentComponent },
];

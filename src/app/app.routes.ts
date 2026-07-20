import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'create-user',
    loadComponent: () => import('./modules/create-user/create-user').then((m) => m.CreateUser),
  },
  {
    path: 'users',
    loadComponent: () => import('./modules/users/users').then((m) => m.Users),
  },
  {
    path: '**',
    redirectTo: 'users',
  }
];

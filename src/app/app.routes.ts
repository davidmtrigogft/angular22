import { Routes } from '@angular/router';
import { UserEditor } from './modules/user-editor/user-editor';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./modules/users/users').then((m) => m.Users),
  },
  {
    path: 'create-user',
    loadComponent: () => import('./modules/user-editor/user-editor').then((m) => m.UserEditor),
  },
  {
    path: 'edit-user/:id',
    loadComponent: () => import('./modules/user-editor/user-editor').then((m) => m.UserEditor),
  },
  {
    path: '**',
    redirectTo: 'users',
  }
];

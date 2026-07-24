import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserCardComponent } from '@components/user-card';
import { IUser, UsersService } from '../../shared';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private readonly _usersService = inject(UsersService);
  private readonly _router = inject(Router);

  protected readonly users = this._usersService.users;

  protected onDeleteUser(id: number): void {
    this._usersService.deleteUser(id);
  }

  protected onViewUser(id: number): void {
    this._router.navigate(['/edit-user', id]);
  }
}

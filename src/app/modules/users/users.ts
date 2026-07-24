import { Component, inject } from '@angular/core';
import { UserCardComponent } from '@components/user-card';
import { UsersService } from '../../shared';
import { Router } from '@angular/router';

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
    const user = this._usersService.getUserById(id);

    if (!user) {
      console.error(`User with id ${id} not found`);
      return;
    }

    console.log('User details:', user);

    this._router.navigate(['/edit-user', id], { state: { user } });
  }
}

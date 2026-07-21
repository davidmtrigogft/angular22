import { Component, inject } from '@angular/core';
import { UserCardComponent } from '@components/user-card';
import { UsersService } from '../../shared';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  private readonly _usersService = inject(UsersService);

  protected readonly users = this._usersService.users;

  protected onDeleteUser(id: number): void {
    this._usersService.deleteUser(id);
  }
}

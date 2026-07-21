import { Service, signal } from '@angular/core';
import { users } from '../constants';
import { CreateUser, User } from '../interfaces';

@Service()
export class UsersService {
  private readonly _users = signal<User[]>(users);

  public readonly users = this._users.asReadonly();

  public addUser(user: CreateUser): void {
    this._users.update((users) => [
      ...users,
      {
        ...user,
        id: this.generateId(),
      },
    ]);
  }

  public deleteUser(id: number): void {
    this._users.update((users) => users.filter((user) => user.id !== id));
    console.log('_users', this._users());

  }

  public getUserById(id: number): User | undefined {
    return this.users().find((user) => user.id === id);
  }

  private generateId(): number {
    const users = this.users();

    return users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }
}

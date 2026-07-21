import { effect, Service, signal } from '@angular/core';
import { users } from '../constants';
import { CreateUser, User } from '../interfaces';

@Service()
export class UsersService {
  private static readonly STORAGE_KEY = 'users';
  private readonly _users = signal<User[]>(this.loadUsers());

  private readonly _storageEffect = effect(() => {
    localStorage.setItem(UsersService.STORAGE_KEY, JSON.stringify(this._users()));
  });

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
  }

  public getUserById(id: number): User | undefined {
    return this.users().find((user) => user.id === id);
  }

  private generateId(): number {
    const users = this.users();

    return users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }

  private loadUsers(): User[] {
    const storedUsers = localStorage.getItem(UsersService.STORAGE_KEY);

    if (!storedUsers) {
      return users;
    }

    try {
      return JSON.parse(storedUsers) as User[];
    } catch {
      return users;
    }
  }
}

import { effect, Service, signal } from '@angular/core';
import { users } from '../constants';
import { ICreateUser, IUser } from '../interfaces';

@Service()
export class UsersService {
  private static readonly STORAGE_KEY = 'users';
  private readonly _users = signal<IUser[]>(this.loadUsers());

  private readonly _storageEffect = effect(() => {
    localStorage.setItem(UsersService.STORAGE_KEY, JSON.stringify(this._users()));
  });

  public readonly users = this._users.asReadonly();

  public addUser(user: ICreateUser): void {
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

  public getUserById(id: number): IUser | undefined {
    return this.users().find((user) => user.id === id);
  }

  public updateUser(updatedUser: IUser): void {
    this._users.update((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  }

  private generateId(): number {
    const users = this.users();

    return users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;
  }

  private loadUsers(): IUser[] {
    try {
      const storedUsers: IUser[] = JSON.parse(
        localStorage.getItem(UsersService.STORAGE_KEY) ?? '[]',
      );

      return storedUsers.length ? storedUsers : users;
    } catch {
      return users;
    }
  }
}

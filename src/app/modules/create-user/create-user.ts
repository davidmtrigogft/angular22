import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { Input } from '@components/input';
import { IUser } from '@shared/interfaces';
import { UsersService } from '@shared/services';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
  imports: [Input, FormsModule],
})
export class CreateUser {
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);

  private readonly model = signal<IUser>({
    id: 0,
    name: '',
    email: '',
    avatar: '',
  });

  protected readonly userForm = form(this.model, (path) => {
    required(path.name, {
      message: 'El nombre es obligatorio',
    });
    required(path.email, {
      message: 'El email es obligatorio',
    });
    email(path.email, {
      message: 'El email no es válido',
    });
  });

  protected onSubmit(): void {
    this.usersService.addUser(this.model());
    this.router.navigate(['/users']);
  }
}

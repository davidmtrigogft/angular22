import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { Input } from '@components/input';
import { IInputConfig } from '@shared/components/input/interfaces/input.interface';
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

  protected readonly nameInput: IInputConfig = {
    label: 'Nombre',
    placeholder: 'Introduce el nombre',
    field: this.userForm.name,
  };

  protected readonly emailInput: IInputConfig = {
    label: 'Correo electrónico',
    placeholder: 'ejemplo@correo.com',
    type: 'email',
    field: this.userForm.email,
  };

  protected readonly avatarInput: IInputConfig = {
    label: 'Avatar URL',
    placeholder: 'https://example.com/avatar.jpg',
    type: 'url',
    field: this.userForm.avatar,
  };

  protected onSubmit(): void {
    this.usersService.addUser(this.model());
    this.router.navigate(['/users']);
  }

  protected createDefaultUser(): void {
    const id = Math.floor(Math.random() * 99) + 1;
    const gender = Math.random() > 0.5 ? 'men' : 'women';

    const defaultUser: IUser = {
      id: 0,
      name: 'Usuario por defecto',
      email: 'usuario@defecto.com',
      avatar: `https://randomuser.me/api/portraits/${gender}/${id}.jpg`,
    };

    this.model.set(defaultUser);
  }
}

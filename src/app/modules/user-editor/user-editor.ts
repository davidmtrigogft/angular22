import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, required } from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@components/input';
import { IInputConfig } from '@shared/components/input/interfaces/input.interface';
import { IUser } from '@shared/interfaces';
import { UsersService } from '@shared/services';
import { literals } from './constants/user-editor-literals.constant';
import { IUserEditorLiterals } from './interfaces/user-editor.interface';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.html',
  styleUrl: './user-editor.scss',
  imports: [Input, FormsModule],
})
export class UserEditor {
  private readonly _usersService = inject(UsersService);
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);

  private readonly _userId = Number(this._route.snapshot.paramMap.get('id') ?? 0);
  private readonly _user = this._userId > 0 ? this._usersService.getUserById(this._userId) : null;

  protected readonly isEditMode = this._userId > 0;

  protected readonly literals: IUserEditorLiterals = this.isEditMode
    ? literals.edit(this._user!)
    : literals.create;

  private readonly _model = signal<IUser>(
    this._user ?? {
      id: 0,
      name: '',
      email: '',
      avatar: '',
    },
  );

  protected readonly userForm = form(this._model, (path) => {
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
    placeholder: 'https://randomuser.me/api/portraits/men/1.jpg',
    type: 'url',
    field: this.userForm.avatar,
  };

  protected onSubmit(): void {
    if (this._userId) {
      this._usersService.updateUser(this._model());
    } else {
      this._usersService.addUser(this._model());
    }
    this._router.navigate(['/users']);
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

    this._model.set(defaultUser);

    this.onSubmit();
  }
}

import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, FormField, required, ValidationError } from '@angular/forms/signals';
import { User, UsersService } from '../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
  imports: [FormField, FormsModule],
})
export class CreateUser {
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);

  private readonly model = signal<User>({
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

  protected onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.userForm.avatar?.().value.set(file.name);
  }

  protected getError(errors: ValidationError[]): string | null {
    return errors[0]?.message ?? null;
  }
}

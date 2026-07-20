import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, FormField, required } from '@angular/forms/signals';
import { User } from '../../shared';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss',
  imports: [FormField, FormsModule],
})
export class CreateUser {
  private readonly model = signal<User>({
    id: 0,
    name: '',
    email: '',
    avatar: '',
  });

  protected readonly userForm = form(this.model, (path) => {
    required(path.name);
    required(path.email);
    email(path.email);
  });

  protected onSubmit(): void {
    console.log('click en el submit');
    console.log(this.userForm().value());
    console.log(this.model());
  }

  protected onAvatarSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    this.userForm.avatar?.().value.set(file.name);
  }
}

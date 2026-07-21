import { Component, input } from '@angular/core';
import { FormField, ValidationError } from '@angular/forms/signals';
import { IInputConfig } from './interfaces/input.interface';

@Component({
  selector: 'app-input',
  imports: [FormField],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  readonly config = input.required<IInputConfig>();

  protected getError(errors: readonly ValidationError[]): string | null {
    return errors[0]?.message ?? null;
  }
}

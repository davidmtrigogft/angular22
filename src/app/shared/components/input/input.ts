import { Component, input } from '@angular/core';
import { FieldTree, FormField, ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-input',
  imports: [FormField],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  readonly label = input.required<string>();

  readonly placeholder = input('');

  readonly type = input('text');

  readonly field = input.required<FieldTree<string | number | boolean | Date | null>>();

  protected getError(errors: readonly ValidationError[]): string | null {
    return errors[0]?.message ?? null;
  }
}

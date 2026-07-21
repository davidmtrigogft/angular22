import { FieldTree } from '@angular/forms/signals';

export interface IInputConfig {
  label: string;
  field: FieldTree<string | number | boolean | Date | null>;
  placeholder?: string;
  type?: 'text' | 'email' | 'url';
}

import { Component, input, output } from '@angular/core';
import { IModal } from './interfaces/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  readonly modalConfig = input.required<IModal>();

  readonly close = output<void>();
}

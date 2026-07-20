import { Component, input, output } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
})
export class UserCardComponent {
  user = input.required<User>();
  viewClick = output<number>();
  deleteClick = output<number>();
}

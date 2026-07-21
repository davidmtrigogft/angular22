import { Component, input, output } from '@angular/core';
import { User } from '../../interfaces';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
})
export class UserCardComponent {
  user = input.required<User>();
  viewUser = output<number>();
  deleteUser = output<number>();
}

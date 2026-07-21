import { Component, input, output } from '@angular/core';
import { IUser } from '../../interfaces';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss'],
})
export class UserCardComponent {
  user = input.required<IUser>();
  viewUser = output<number>();
  deleteUser = output<number>();
}

import { Component } from '@angular/core';
import { UserCardComponent } from '@components/user-card';

@Component({
  selector: 'app-users',
  imports: [UserCardComponent],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {}

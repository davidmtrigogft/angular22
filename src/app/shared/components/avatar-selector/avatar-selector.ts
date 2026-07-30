import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.html',
  styleUrl: './avatar-selector.scss',
})
export class AvatarSelector {
  readonly avatarUrl = input<string>('');

  readonly changeAvatar = output<void>();
}

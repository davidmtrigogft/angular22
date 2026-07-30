import { Component, input, output } from '@angular/core';
import { AvatarImage, IAvatarImage } from '../avatar-image';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.html',
  styleUrl: './avatar-selector.scss',
  imports: [AvatarImage],
})
export class AvatarSelector {
  readonly avatarImageConfig = input<IAvatarImage>({
    avatarUrl: '',
  });

  readonly changeAvatar = output<void>();
  readonly deleteAvatar = output<void>();
}

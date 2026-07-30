import { Component, input, output } from '@angular/core';
import { IAvatarImage } from './interfaces';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.html',
  styleUrl: './avatar-image.scss',
})
export class AvatarImage {
  readonly avatarImageConfig = input<IAvatarImage>({
    avatarUrl: '',
    size: 'md'
  });
}

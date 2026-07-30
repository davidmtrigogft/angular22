import { Component, computed, effect, input, output, signal } from '@angular/core';
import { AvatarImage, IAvatarImage } from '../avatar-image';
import { Modal } from '../modal';
import { IModal } from '../modal/interfaces/modal.interface';
import { IGender } from '@shared/interfaces';
import { numberOfUsersInRandomUser } from '@shared/constants';

@Component({
  selector: 'app-avatar-picker-modal',
  templateUrl: './avatar-picker-modal.html',
  styleUrl: './avatar-picker-modal.scss',
  imports: [AvatarImage, Modal],
})
export class AvatarPickerModal {
  private readonly setAvatarEffect = effect(() => {
    const url = this.avatarUrl();
    const match = url.match(/portraits\/(men|women)\/(\d+)\.jpg/);

    if (!match) {
      return;
    }

    this.gender.set(match[1] as IGender);
    this.avatarId.set(Number(match[2]));
  });

  readonly avatarUrl = input<string>('');
  readonly close = output<void>();
  readonly avatarSelected = output<string>();

  protected readonly gender = signal<IGender>('men');
  protected readonly avatarId = signal(1);

  protected avatarModalConfig = signal<IModal>({
    title: 'Seleccionar avatar',
    isOpen: true,
  });

  protected readonly avatarImageConfig = computed<IAvatarImage>(() => ({
    avatarUrl: `https://randomuser.me/api/portraits/${this.gender()}/${this.avatarId()}.jpg`,
    size: 'lg'
  }));

  protected onConfirm(): void {
    const url = `https://randomuser.me/api/portraits/${this.gender()}/${this.avatarId()}.jpg`;
    this.avatarSelected.emit(url);
  }

  protected updateId(value: number): void {
    const normalizedValue = Math.min(numberOfUsersInRandomUser, Math.max(1, value));
    this.avatarId.set(normalizedValue);
  }
}

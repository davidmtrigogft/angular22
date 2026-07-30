import { IUser } from '@shared/interfaces/user.interface';

export interface IUserEditorLiterals {
  createDefaultUserButton?: string;
  createUserButton: string;
  formSubTitle: string;
  formTitle: string;
}

export interface IUserEditorLiteralsRecord {
  create: IUserEditorLiterals;
  edit: (user: IUser) => IUserEditorLiterals;
}

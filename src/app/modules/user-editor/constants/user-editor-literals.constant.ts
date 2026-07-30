import { IUser } from '@shared/interfaces';
import {
  IUserEditorLiterals,
  IUserEditorLiteralsRecord,
} from '../interfaces/user-editor.interface';

export const literals: IUserEditorLiteralsRecord = {
  create: {
    createDefaultUserButton: 'Crear usuario por defecto',
    createUserButton: 'Crear usuario',
    formSubTitle: 'Añade un nuevo usuario al sistema',
    formTitle: 'Crear usuario',
  },

  edit: (user: IUser): IUserEditorLiterals => ({
    createUserButton: 'Actualizar usuario',
    formSubTitle: `Edita el usuario ${user.name}`,
    formTitle: 'Editar usuario',
  }),
};

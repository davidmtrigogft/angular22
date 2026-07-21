export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export type ICreateUser = Omit<IUser, 'id'>;

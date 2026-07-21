export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export type CreateUser = Omit<User, 'id'>;

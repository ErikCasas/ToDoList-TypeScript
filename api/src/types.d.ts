import { Document } from 'mongoose';

export type State = 'To Do' | 'Doing' | 'Doed';
export type Role<string> = 'Admin' | 'User' | 'Disabled';

export interface Note extends Document {
  description: string;
  important: boolean;
  tittle: string;
  user: object;
  state: State;
}

export interface User extends Document {
  passwordHash: string;
  email: string;
  name: string;
  collections: Array;
  role: Role;
}

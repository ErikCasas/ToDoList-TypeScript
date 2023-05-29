import { Document } from 'mongoose';

export type State<string> = 'To Do' | 'Doing' | 'Doed';
export type Role<string> = 'Admin' | 'User' | 'Disabled';

/** */
export interface User extends Document {
  passwordHash: string;
  email: string;
  name: string;
  collections: Array;
  role: Role;
}

export interface Note extends Document {
  user: object;
  description: string;
  important: boolean;
  state: State;
}

export interface Pomodoro extends Document {
  user: object;
  remainingTime: number;
  description: string;
}

export interface Calendar extends Document {
  user: object;
  date: Date;
  description: string;
  startTime: Date;
  endTime: Date;
}

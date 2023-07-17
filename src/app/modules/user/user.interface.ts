/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IUser = {
  name: {
    firstName: string;
    lastName: string;
  };
  password: string;
  email: string;
};

export type UserModel = {
  isUserExist(email: string): Promise<Pick<IUser, 'email' | 'password'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, Record<string, unknown>>;
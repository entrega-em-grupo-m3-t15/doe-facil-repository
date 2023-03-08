import { ReactNode } from "react"
import { iAxiosError } from "../user/userInterfaces";

export interface IUserProps {
  name: string;
  email: string;
  password: string;
  userIncome?: string;
}

export interface iUpdateUser{
  name: string;
  description: string;
  amount: number;
}

export interface IUserContextProps{
  deleteUser: () => Promise<iAxiosError | void>;
  updateUser: (data: iUpdateUser) => Promise<iAxiosError | void>;
}

export interface IChildrenProps {
  children: ReactNode;
}
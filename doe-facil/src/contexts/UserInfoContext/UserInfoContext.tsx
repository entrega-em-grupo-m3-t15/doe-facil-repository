import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iAxiosError } from "../user/userInterfaces";
import { IUserContextProps, IChildrenProps, iUpdateUser } from "./inteface";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../Services/api";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("@USERID");
  const token = localStorage.getItem("@USERTOKEN");

  const deleteUser = async () => {
    try {
      const response = await API.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");

      toast.success("Usuário deletado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const updateUser = async (data: iUpdateUser) => {
    try {
      const response = await API.patch<iUpdateUser>(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
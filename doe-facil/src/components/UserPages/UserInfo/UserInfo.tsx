import { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { ModalUpdateUser } from "../../Modals/UpdateInfoModals/ModalUser/ModalUpdateUser/ModalUpdateUser";
import { StyleProfileUser } from "./style";

export const UserInfo = () => {
  const { user } = useContext(UserRequestsContext);
  const { especialModalIsOpen, setEspecialModalIsOpen } =
    useContext(ModalsContext);

  return (
    <StyleProfileUser>
      <div className="box_profile">
        <header>
          <h2>Perfil</h2>
          <button onClick={() => setEspecialModalIsOpen("editUser")}>
            Editar perfil
          </button>
        </header>

        <span className="icon">
          <div className="box_icon">
            <BiUserCircle
              style={{
                width: 200,
                height: 200,
              }}
            />
          </div>

          <h2>{user?.name}</h2>
        </span>
      </div>

      <div className="box_info">
        <h2>Informações</h2>
        <ul>
          <li>
            <span>Contato:</span> {user?.contact}
          </li>
          <li>
            <span>Endereço:</span> {user?.adress}
          </li>
          <li>
            <span> E-mail:</span> {user?.email}
          </li>
        </ul>
      </div>
      {especialModalIsOpen == "editUser" && <ModalUpdateUser />}
    </StyleProfileUser>
  );
};

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";

import {
  StyledCardListMain,
  StyledContainerMobile,
  StyledHeaderMain,
} from "./style";
import { MainPageCard } from "../../components/Cards/MainPageCards/DoneeCard";
import { DetailsModal } from "../../components/Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";

export const MainPage = () => {
  const { isOpenModal } = useContext(ModalsContext);
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);
  const userId = localStorage.getItem("@USERID");

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERTOKEN");
    navigate("/");
  };

  console.log(user);

  return (
    <StyledContainerMobile>
      <StyledHeaderMain>
        <div className="box_header">
          <button onClick={() => logoutUser}>Sair</button>

          <div className="box_logo">
            <img src="" alt="" />
          </div>

          <Link
            to={
              user?.user?.isDonor
                ? `/userPage/donor/${userId}`
                : `/userPage/donee/${userId}`
            }
          >
            Perfil
          </Link>
        </div>
      </StyledHeaderMain>

      <section>
        <div className="box_profile">
          <div
            className="box_icon"
            onClick={() =>
              navigate(
                user?.user?.isDonor
                  ? `/userPage/donor/${userId}`
                  : `/userPage/donee/${userId}`
              )
            }
          >
            <BiUserCircle style={{ width: 100, height: 80 }} />
          </div>

          <div className="user_information">
            <h2>{user?.user?.email}</h2>
            <p>{user?.user?.contact}</p>
          </div>
        </div>
      </section>

      <main>
        <h2>Doações</h2>

        <StyledCardListMain>
          {donations.map((donation, index) => {
            return <MainPageCard donation={donation} key={index} />;
          })}
        </StyledCardListMain>
      </main>
      {isOpenModal && <DetailsModal />}
    </StyledContainerMobile>
  );
};

import { useContext, useState } from "react";
import { ICardDonation } from "../../../contexts/DashboardContext/interface";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { CollectModal } from "../../Modals/MainPageModal/CollectModal";
import { StyleCards } from "./style";
import imageFood from "../../../img/profileImage/imagefood.png";
import imageClothes from "../../../img/profileImage/imageclothes.svg";
import { DetailsModal } from "../../Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";

export const MainPageCard = ({
  donation,
  modalType,
  setModalType,
}: ICardDonation) => {
  const { user } = useContext(UserRequestsContext);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const modals = {
    [`donee${donation.id}`]: <CollectModal cardId={donation.id} />,
    [`${donation.id}`]: (
      <DetailsModal
        donation={donation.id}
        closeModal={() => setModalType!("")}
      />
    ),
  };

  const openModal = () => {
    if (modalType) return;
    if (!user!.isDonor) {
      setSelectedCard(donation.id);
      setModalType!(`donee${donation.id}`);
    }
  };

  return (
    <StyleCards onClick={openModal}>
      <div className="card_title">
        <h2>Disponível</h2>
      </div>
      <main>
        <div className="container_card">
          <div className="box_image">
            {donation.isClothes ? (
              <img src={imageClothes} alt="imagem da doação" />
            ) : (
              <img src={imageFood} alt="imagem da doação" />
            )}
          </div>
          <div className="card_description">
            <h4>{donation.name}</h4>
            <p>{donation.description}</p>
            <p>{donation.amount}</p>
          </div>
        </div>
        <button onClick={() => setModalType!(donation.id)}>Detalhes</button>
      </main>
      {modalType && modals[modalType]}
    </StyleCards>
  );
};

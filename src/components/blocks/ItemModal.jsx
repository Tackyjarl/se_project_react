import { defaultClothingItems } from "../../utils/constants";
import "../components/ItemModal.css";

function ItemModal({ activeModal, selectedCard, closeActiveModal }) {
  return (
    <div
      className={`modal ${activeModal === "preview" && "modal__opened"}`}
      onClick={closeActiveModal}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>
        <img
          src={selectedCard.link}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather"> Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

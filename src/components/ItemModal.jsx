import { useContext, useEffect } from "react";
import "../blocks/ItemModal.css";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemModal({
  selectedCard,
  closeActiveModal,
  isOpen,
  handleDeleteCard,
  handleDeleteModalClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = selectedCard?.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete modal__delete_visible ${
    isOwn ? "" : "modal__delete_hidden"
  }`;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // console.log("escape");
        closeActiveModal();
      }
    };

    if (!isOpen) return;

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // console.log("opened");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // console.log("closed");
    };
  }),
    [isOpen, closeActiveModal];
  return (
    <div
      className={`modal ${isOpen && "modal_opened"}`}
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
          className="modal__close modal__close-item"
        ></button>

        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__footer">
          {isOwn && (
            <button
              type="button"
              className={itemDeleteButtonClassName}
              onClick={handleDeleteModalClick}
            >
              Delete Item
            </button>
          )}

          <h2 className="modal__caption">{selectedCard.name}</h2>
          <p className="modal__weather"> Weather: {selectedCard.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

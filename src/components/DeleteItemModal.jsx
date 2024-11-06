import { useEffect } from "react";
import "../blocks/DeleteItemModal.css";

function DeleteItemModal({
  handleDeleteCard,
  closeActiveModal,
  isOpen,
  selectedCard,
}) {
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
        className="modal__content modal__content-delete"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close modal__close-item"
        ></button>
        <p className="modal__delete-query">
          Are you sure you want to delete this item?
          <br /> This action is irreversible.
        </p>
        <button
          type="submit"
          onClick={handleDeleteCard}
          className="modal__delete modal__delete-confirm"
        >
          Yes, delete Item
        </button>
        <button
          type="button"
          onClick={closeActiveModal}
          className="modal__delete-cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteItemModal;

import { useEffect } from "react";
import "../components/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  closeActiveModal,
  isOpen,
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
      className={`form__modal ${isOpen && "form__modal_opened"}`}
      onClick={closeActiveModal}
    >
      <div
        className="form__modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2 className="form__modal-title">{titleText}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="form__modal-close"
        ></button>
        <form className="form__modal-form" noValidate>
          {children}
          <button className="form__modal-submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

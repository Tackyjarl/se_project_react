import { useEffect } from "react";
import "../components/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  titleText,
  activeModal,
  closeActiveModal,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // console.log("escape");
        closeActiveModal();
      }
    };

    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      // console.log("testing");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // console.log("test");
    };
  }),
    [activeModal === "add-garment" && "form__modal-opened", closeActiveModal];
  return (
    <>
      <div
        className={`form__modal ${
          activeModal === "add-garment" && "form__modal-opened"
        }`}
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
    </>
  );
}

// function ModalWithForm({
//   children,
//   buttonText,
//   titleText,
//   activeModal,
//   closeActiveModal,
// }) {
//   return (
//     <>
//       <div
//         className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
//         onClick={closeActiveModal}
//         // onKeyUp={(e) => {
//         //   if (e.key === "Escape") {
//         //     {
//         //       closeActiveModal;
//         //     }
//         //   }
//         // }}
//       >
//         <div
//           className="modal__container"
//           onClick={(e) => {
//             e.stopPropagation();
//           }}
//         >
//           <h2 className="modal__title">{titleText}</h2>
//           <button
//             onClick={closeActiveModal}
//             type="button"
//             className="modal__close"
//           ></button>
//           <form className="modal__form" noValidate>
//             {children}
//             <button className="modal__submit" type="submit">
//               {buttonText}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

export default ModalWithForm;

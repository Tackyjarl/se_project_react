import { useContext, useEffect, useState } from "react";
import "../blocks/ModalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

const EditProfileModal = ({
  isOpen,
  closeActiveModal,
  handleSignUpButtonClick,
  handleEditProfile,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const setForm = () => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  };

  useEffect(() => {
    if (isOpen) {
      setForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditProfile({ name, avatar });
    // console.log("testing");
    // console.log(name);
  };
  return (
    <ModalWithForm
      buttonText="Save changes"
      titleText="Change Profile Data"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="form-username_edit" className="modal__label">
        Username{" "}
        <input
          id="form-username_edit"
          type="text"
          className="modal__input"
          required
          minLength="2"
          maxLength="40"
          placeholder="Username"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        ></input>
      </label>
      <label htmlFor="form-avatar_edit" className="modal__label">
        Avatar{" "}
        <input
          id="form-avatar_edit"
          type="url"
          className="modal__input"
          placeholder="Avatar Url"
          required
          value={avatar}
          onChange={(evt) => setAvatar(evt.target.value)}
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

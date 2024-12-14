import "../blocks/SideBar.css";
import { useContext } from "react";
import headerAvatar from "../assets/2e259a8c8558ae5104a4ec0d6ae39021.png";
import CurrentUserContext from "../contexts/CurrentUserContext";

function SideBar({ handleLogOut, handleEditProfileButtonClick }) {
  const currentUser = useContext(CurrentUserContext);

  const avatarLink = currentUser.avatar === "";

  const initialNameValue = (name) => {
    if (name) {
      return name[0].toUpperCase();
    }
    return "?";
  };

  const avatarClassName = `header__avatar header__avatar_visible ${
    !avatarLink ? "" : "header__avatar_hidden"
  }`;

  const placeholderClassName = `header__placeholder ${
    avatarLink ? "" : "header__avatar_hidden"
  }`;
  return (
    <div className="sidebar">
      <div className="sidebar__container-avatar">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className={avatarClassName}
        ></img>
        <div className={placeholderClassName}>
          {initialNameValue(currentUser.name)}
        </div>
        <p className="sidebar__username"> {currentUser.name}</p>
      </div>
      <div className="sidebar__container-buttons">
        <button
          className="sidebar__buttons"
          type="button"
          onClick={handleEditProfileButtonClick}
        >
          Edit Profile
        </button>
        <button
          className="sidebar__buttons"
          type="button"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;

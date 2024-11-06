import "../blocks/SideBar.css";
import headerAvatar from "../assets/2e259a8c8558ae5104a4ec0d6ae39021.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__container-avatar">
        <img
          src={headerAvatar}
          alt="Terrence Tegegne"
          className="sidebar__avatar"
        ></img>
        <p className="sidebar__username"> Terrence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;

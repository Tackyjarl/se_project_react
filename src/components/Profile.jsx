import ClothesSection from "../components/ClothesSection.jsx";
import SideBar from "../components/SideBar.jsx";
import "../blocks/Profile.css";

function Profile({
  clothingItems,
  handleCardClick,
  handleAddButtonClick,
  handleLogOut,
  handleEditProfileButtonClick,
  isLoggedIn,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleLogOut={handleLogOut}
          handleEditProfileButtonClick={handleEditProfileButtonClick}
        />
      </section>

      <section className="profile__clothing">
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          handleAddButtonClick={handleAddButtonClick}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
}
export default Profile;

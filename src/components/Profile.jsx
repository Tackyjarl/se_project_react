import ClothesSection from "../components/ClothesSection.jsx";
import SideBar from "../components/SideBar.jsx";
import "../blocks/Profile.css";

function Profile({ clothingItems, handleCardClick, handleAddButtonClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>

      <section className="profile__clothing">
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          handleAddButtonClick={handleAddButtonClick}
        />
      </section>
    </div>
  );
}
export default Profile;

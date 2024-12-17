import { useContext } from "react";
import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddButtonClick,
  isLoggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userClothing = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes__section">
      <div className="clothes__section-container">
        <p className="clothes__section-text">Your items</p>
        <button
          className="clothes__section-button"
          onClick={handleAddButtonClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__section__cards-list">
        {userClothing.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;

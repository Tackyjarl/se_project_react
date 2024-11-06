import "../blocks/ClothesSection.css";
import ItemCard from "./ItemCard";

function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddButtonClick,
}) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;

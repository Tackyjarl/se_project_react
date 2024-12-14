import "../blocks/ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item);
  };

  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((_id) => _id === currentUser._id);

  const itemLikeButtonClass = isLiked
    ? "card__like-button card__like-button_active"
    : "card__like-button card__like-button_inactive";
  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__name">{item.name}</h2>
        {isLoggedIn ? (
          <button
            className={itemLikeButtonClass}
            type="button"
            onClick={handleLike}
          ></button>
        ) : (
          <></>
        )}
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={handleCardClick}
      ></img>
    </li>
  );
}

export default ItemCard;

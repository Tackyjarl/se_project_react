//modules
import React from "react";
import { useEffect, useState, request } from "react";
import { Routes, Route } from "react-router-dom";

//utils
import * as auth from "../utils/auth.js";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../utils/constants.js";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import {
  getItems,
  addNewItems,
  deleteItems,
  getUserInfo,
  editUserInfo,
  addCardLike,
  removeCardLike,
} from "../utils/api.js";

//components
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import Profile from "./Profile.jsx";
import AddItemModal from "./AddItemModal.jsx";
import DeleteItemModal from "./DeleteItemModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import "../blocks/App.css";

//contexts
import { CurrentTemperatureContext } from "../contexts/CurrentTemperatureContext.js";
import CurrentUserContext from "../contexts/CurrentUserContext.jsx";
import EditProfileModal from "./EditProfileModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "Flames",
    temp: { F: 999, C: 999 },
    city: "The Moon",
    condition: "On Fire",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [tempUnit, setTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    email: "",
    name: "",
    avatar: "",
  });
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteModalClick = () => {
    setActiveModal("delete");
  };

  const handleLoginButtonClick = () => {
    setActiveModal("login");
  };

  const handleSignUpButtonClick = () => {
    setActiveModal("signup");
  };

  const handleEditProfileButtonClick = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItem = (item) => {
    return addNewItems(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = () => {
    const token = getToken();
    deleteItems(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleTempUnitChange = () => {
    if (tempUnit === "C") setTempUnit("F");
    if (tempUnit === "F") setTempUnit("C");
  };

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpened(true);
  // };

  const TOKEN_KEY = "jwt";

  const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  };

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const removeToken = () => {
    return localStorage.removeItem(TOKEN_KEY);
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    getUserInfo(jwt)
      .then((data) => {
        // console.log(data);
        setIsLoggedIn(true);
        setCurrentUser(data);
        setIsLoggedInLoading(false);
      })
      .catch(console.error);
  }, []);

  const handleRegistration = ({ username, password, email, avatar }) => {
    auth
      .register(username, password, email, avatar)
      .then(() => {
        handleLogin(email, password);
        closeActiveModal();
      })
      .catch(console.error);
  };

  function getUserData(token) {
    getUserInfo(token)
      .then((userData) => {
        setCurrentUser({
          _id: userData._id,
          email: userData.email,
          name: userData.name,
          avatar: userData.avatar,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      // console.log("not testing");
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          // setCurrentUser(data.token);
          getUserData(data.token);
          setIsLoggedIn(true);
          setIsLoggedInLoading(false);
          closeActiveModal();
          // console.log("testing");
        }
      })
      .finally(() => {
        setIsLoggedInLoading();
      });
  };

  const handleLogOut = () => {
    if (isLoggedIn) {
      removeToken();
      setIsLoggedIn(false);
      setCurrentUser({});
    } else {
      console.error(error);
    }
  };

  const handleEditProfile = ({ name, avatar }) => {
    const token = getToken();
    if (!currentUser) {
      console.error("Error");
      return;
    }
    editUserInfo({ name, avatar }, token)
      .then((data) => {
        setCurrentUser(data);
        closeActiveModal();
        console.log(data.name);
      })
      .catch(console.error);
  };

  const handleCardLike = ({ _id, likes }) => {
    const token = getToken();
    const isLiked = likes.includes(currentUser._id);
    !isLiked
      ? addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureContext.Provider
          value={{ tempUnit, handleTempUnitChange }}
        >
          <div className="page__section">
            <Header
              handleAddButtonClick={handleAddButtonClick}
              weatherData={weatherData}
              // toggleMobileMenu={toggleMobileMenu}
              handleTempUnitChange={handleTempUnitChange}
              isLoggedIn={isLoggedIn}
              handleSignUpButtonClick={handleSignUpButtonClick}
              handleLoginButtonClick={handleLoginButtonClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    isLoggedInLoading={isLoggedInLoading}
                  >
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleAddButtonClick={handleAddButtonClick}
                      handleLogOut={handleLogOut}
                      handleEditProfileButtonClick={
                        handleEditProfileButtonClick
                      }
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>

          <ItemModal
            selectedCard={selectedCard}
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "preview"}
            handleDeleteModalClick={handleDeleteModalClick}
          />
          <AddItemModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "add-garment"}
            handleAddItem={handleAddItem}
          />
          <DeleteItemModal
            handleDeleteCard={handleDeleteCard}
            isOpen={activeModal === "delete"}
            closeActiveModal={closeActiveModal}
          />
          <RegisterModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "signup"}
            handleRegistration={handleRegistration}
            handleLoginButtonClick={handleLoginButtonClick}
          />
          <LoginModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "login"}
            handleSignUpButtonClick={handleSignUpButtonClick}
            handleLogin={handleLogin}

            // handleRegistration={handleRegistration}
          />
          <EditProfileModal
            handleEditProfile={handleEditProfile}
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
          />
        </CurrentTemperatureContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

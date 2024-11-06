export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherConditions = [
  {
    day: true,
    weather: "clear",
    url: new URL("../assets/day/sunny-day.svg", import.meta.url).href,
  },
  {
    day: true,
    weather: "cloudy",
    url: new URL("../assets/day/cloudy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    weather: "rain",
    url: new URL("../assets/day/rain-day.svg", import.meta.url).href,
  },
  {
    day: true,
    weather: "snow",
    url: new URL("../assets/day/snow-day.svg", import.meta.url).href,
  },
  {
    day: true,
    weather: "storm",
    url: new URL("../assets/day/storm-day.svg", import.meta.url).href,
  },
  {
    day: true,
    weather: "fog",
    url: new URL("../assets/day/fog-day.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "clear",
    url: new URL("../assets/night/sunny-night.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "cloudy",
    url: new URL("../assets/night/cloudy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "rain",
    url: new URL("../assets/night/rain-night.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "snow",
    url: new URL("../assets/night/snow-night.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "storm",
    url: new URL("../assets/night/storm-night.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "fog",
    url: new URL("../assets/night/fog-night.svg", import.meta.url).href,
  },
];

export const defaultWeatherConditions = [
  {
    day: true,
    weather: "clear",
    url: new URL("../assets/day/default-day.svg", import.meta.url).href,
  },
  {
    day: false,
    weather: "clear",
    url: new URL("../assets/night/default-night.svg", import.meta.url).href,
  },
];

export const coordinates = {
  latitude: 34.119301,
  longitude: -84.005386,
};

export const APIkey = "e6ae623e5cc1a2a9b287ec4fc5258ad3";

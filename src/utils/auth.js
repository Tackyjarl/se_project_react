const BASE__URL =
  process.env.NODE_ENV === "production"
    ? "https://api.tackyjarl.crabdance.com"
    : "http://localhost:3001";
import { checkResponse } from "./api";

export const register = (name, password, email, avatar) => {
  return fetch(`${BASE__URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email, avatar }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE__URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const BASE__URL = "http://localhost:3001";
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

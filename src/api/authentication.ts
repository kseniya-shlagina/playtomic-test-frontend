import axios from "axios";

export const setAuthenticationHeader = (token: string) => {
  localStorage.setItem("token", token);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const resetAuthenticationHeader = () => {
  localStorage.removeItem("token");

  axios.defaults.headers.common["Authorization"] = "";
};

export const getAuthenticationHeader = () => {
  return localStorage.getItem("token");
};

const token = getAuthenticationHeader();

if (token) {
  setAuthenticationHeader(token);
}

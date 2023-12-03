export const API_PATH = "http://127.0.0.1:8001";

export const TOKEN = "GAZ/TOKEN";
export const USER_ROLE = "GAZ/USER_ROLE";

export const CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${localStorage.getItem(TOKEN)}`,
  },
};

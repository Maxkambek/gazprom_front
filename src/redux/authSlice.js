import { TOKEN } from "../constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem(TOKEN) ? localStorage.getItem(TOKEN) : null,
  user: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.extractedValue;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;

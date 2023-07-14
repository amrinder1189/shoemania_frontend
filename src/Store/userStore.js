import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  isAuth: false,
  error: "",
};

export const userSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Loadinguser: (state) => {
      state.isLoading = true;
    },
    LoadedUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(state.user));

      state.isLoading = false;
      state.isAuth = true;
    },
    UpdatingUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(state.user));

      state.isLoading = false;
      state.isAuth = true;
    },
    LogoutUser: (state, action) => {
      state.user = {};

      localStorage.removeItem("user");

      state.isLoading = false;
      state.isAuth = false;
    },
    LoadeduserError: (state, action) => {
      state.isError = action.payload;
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  Loadinguser,
  LogoutUser,
  UpdatingUser,
  LoadedUser,
  LoadeduserError,
} = userSlice.actions;

export default userSlice.reducer;

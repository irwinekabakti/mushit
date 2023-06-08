import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./action/home-slice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});

export default store;

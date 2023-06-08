import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./action/home-slice";
import searchSlice from "./action/search-slice";

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;

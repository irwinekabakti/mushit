import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  albums: [],
  playlists: [],
  charts: [],
  trending: [],
  isLoading: false,
  isError: false,
  play: null,
  menu: false,
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    handleMenu: (state, { payload }) => {},
  },
  extraReducers: (builder) => {},
});

export const { handleMenu } = homeSlice.actions;

export default homeSlice;

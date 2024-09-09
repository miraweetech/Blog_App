import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuthor = createAsyncThunk("author/fetchAuthor", async () => {
  try {
    const response = await axios.get(
      `https://66d7f3f837b1cadd8052c6c0.mockapi.io/images/images`
    );
    console.log("author", response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

const AuthorSlice = createSlice({
  name: "author",
  initialState: {
    data: [],
    loading: false,
    error: null,
    details: null,
  },
  reducers: {
    requestDetailSuccessAction: (state, action) => {
      state.details = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthor.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { requestDetailSuccessAction } = AuthorSlice.actions;
export default AuthorSlice.reducer;

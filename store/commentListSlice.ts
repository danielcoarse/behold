import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType } from "../interfaces";

interface CommentState {
  value: CommentType[] | [];
}

const initialState: CommentState = {
  value: [],
};

export const commentListSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<CommentType[]>) => {
      state.value = action.payload;
    },
  },
});

export const { updateList } = commentListSlice.actions;

export default commentListSlice.reducer;

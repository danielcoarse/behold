import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface commentFormState {
  value: {
    body: string;
  };
}

const initialState: commentFormState = {
  value: {
    body: "",
  },
};

export const commentFormSlice = createSlice({
  name: "commentForm",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.value.body = action.payload;
    },
    resetCommentForm: (state) => {
      state.value.body = "";
    },
  },
});

export const { changeText, resetCommentForm } = commentFormSlice.actions;

export default commentFormSlice.reducer;

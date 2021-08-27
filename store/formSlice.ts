import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: {
    title: string;
    body: string;
  };
}

const initialState: CounterState = {
  value: {
    title: "",
    body: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.value.title = action.payload;
    },
    changeBody: (state, action: PayloadAction<string>) => {
      state.value.body = action.payload;
    },
    resetForm: (state) => {
      state.value.title = "";
      state.value.body = "";
    },
  },
});

export const { changeTitle, changeBody, resetForm } = formSlice.actions;

export default formSlice.reducer;

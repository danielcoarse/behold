import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import commentFormSlice from "./commentFormSlice";
import commentListSlice from "./commentListSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    commentForm: commentFormSlice,
    comments: commentListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

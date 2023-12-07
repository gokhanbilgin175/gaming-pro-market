import { configureStore } from "@reduxjs/toolkit";
import leftSlice from "./slices/left-slice";

export default configureStore({
  reducer: {
    left: leftSlice,
  },
});

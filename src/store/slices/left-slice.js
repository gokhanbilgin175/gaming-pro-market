import { createSlice } from "@reduxjs/toolkit";

export const leftSlice = createSlice({
  name: "left",
  initialState: {
    sidebarLeft: false,
  },
  reducers: {
    hamburgerClicked: (state, action) => {
      state.sidebarLeft = action.payload;
    },
  },
});

export const { hamburgerClicked } = leftSlice.actions;
export default leftSlice.reducer;

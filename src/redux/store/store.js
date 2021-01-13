import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterSlicerReducer } from "../slicers/counterSlicer";

const store = configureStore({
  reducer: counterSlicerReducer,
});

export default store;

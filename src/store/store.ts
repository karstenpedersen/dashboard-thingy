import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/themeSlice";
import hotkeyReducer from "@/store/hotkeySlice";
import commandsReducer from "@/store/commandsSlice";

const store = configureStore({
  reducer: {
    userSettings: combineReducers({
      theme: themeReducer,
      hotkeys: hotkeyReducer,
    }),
    commands: commandsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = ReturnType<typeof store.dispatch>;

export default store;

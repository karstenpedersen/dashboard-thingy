import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "@/store/settingsReducer";
import commandsReducer from "@/store/commandsReducer";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    commands: commandsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = ReturnType<typeof store.dispatch>;

export default store;

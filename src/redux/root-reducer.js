import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import proyectsReducer from "./proyects/proyects.reducer";

const persistConfig = {
  key: "geomaticApp",
  storage,
  whitelist: "user"
};

const rootReducer = combineReducers({
  user: userReducer,
  proyects: proyectsReducer
});

export default persistReducer(persistConfig, rootReducer);

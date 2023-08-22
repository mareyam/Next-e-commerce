import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);


// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Reducer";

// export default configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });
// 
// 
// 
// 
// 

// export const store = configureStore({
//   cart: cartSlice,
// });

// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./Reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // or 'redux-persist/lib/storage/session' for session storage
// import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const reducer = combineReducers({
//   cart: cartSlice,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });
// export const persistor = persistStore(store);

// cart: cartSlice.reducer

import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/hospital-data-slice";
import { hospitalApi } from "./api";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    [hospitalApi.reducerPath]: hospitalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospitalApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

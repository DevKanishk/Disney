import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
  reducer: {
      user: userReducer,
      movie: movieReducer,
  },
  // serializableCheck is off because Firebase user/movie objects
  // (and Firestore Timestamps) aren't plain serializable JS objects.
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
});
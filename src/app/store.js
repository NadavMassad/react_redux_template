import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sampReducer from '../samp/sampSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    samp: sampReducer
  },
});

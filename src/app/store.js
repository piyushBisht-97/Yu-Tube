import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataApi/dataSlice'
export const store = configureStore({
  reducer: {
    data:dataReducer
  },
});

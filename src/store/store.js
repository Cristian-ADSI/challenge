import { configureStore } from '@reduxjs/toolkit';
import userReducer  from 'features/UserSLice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import userReducer  from 'helppers/UserSLice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

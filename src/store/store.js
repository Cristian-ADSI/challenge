import { configureStore } from '@reduxjs/toolkit';
import userReducer  from 'helpers/UserSLice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

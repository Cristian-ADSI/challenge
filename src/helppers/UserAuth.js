import { auth } from 'services/firebase';
import { login, logout } from './UserSLice';

export const userAuth = (dispatch, setLoged) => {
  auth.onAuthStateChanged((authUSer) => {
    if (authUSer) {
      dispatch(
        login({
          id: authUSer.uid,
          name: authUSer.displayName ? authUSer.displayName : authUSer.email,
        })
      );
    } else {
      setLoged('none');
      dispatch(logout({}));
    }
  });
};

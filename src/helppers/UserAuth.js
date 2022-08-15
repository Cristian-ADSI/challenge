import { auth, signOut } from 'services/firebase';
import { login, logout } from './UserSLice';

export const userAuth = (dispatch) => {
  auth.onAuthStateChanged((authUSer) => {
    if (authUSer) {
      dispatch(
        login({
          id: authUSer.uid,
          name: authUSer.displayName ? authUSer.displayName : authUSer.email,
        })
      );
    } else {
      dispatch(logout({}));
    }
  });
};

export const userLogOut = (dispatch) => {
  signOut(auth)
    .then((resp) => {
      alert('Log out successfully!');
      dispatch(logout({}));
    })
    .catch((err) => {
      alert('Something went wrong, sorry');
      console.log(err);
    });
};

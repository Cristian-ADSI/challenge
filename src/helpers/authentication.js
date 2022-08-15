import { auth, browserLocalPersistence, persistence, sigIn, signOut } from 'services/firebase';
import { login, logout } from './UserSLice';

export const userAuth = (dispatch, setLogged) => {
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
      setLogged && setLogged(false);
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

export const userLogIn = (email,password) => {
  persistence(auth, browserLocalPersistence)
    .then(() => {
      sigIn(auth, email.toString(), password.toString())
        .then((resp) => {
          alert('Log in Succesfuly');
        })
        .catch((err) => {
          alert('Somethig went wrong sorry');
          console.log(err);
        });
    })
    .catch((err) => {
      alert('Somethig went wrong sorry');
      console.log(err);
      alert(err);
    });
};

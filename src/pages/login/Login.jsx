import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'helpers/UserSLice';
import { validEmail, emptyFields } from 'helpers/validation';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import useForm from 'hooks/useForm';
import { userAuth, userLogIn } from 'helpers/authentication';
import './Login.scss';

const intValues = {
  email: '',
  password: '',
};

const Login = () => {
  const user = useSelector(selectUser);
  const [inputvalues, handleInputChange] = useForm(intValues);
  const { email, password } = inputvalues;
  const dispatch = useDispatch();

  useEffect(() => {
    userAuth(dispatch);
  }, []);

  const handleSubmit = () => {
    if (!validEmail(email)) return alert('Email invalido');
    if (!emptyFields(email, password)) return alert('Campos vacios');
    userLogIn(email, password);
  };

  //
  return (
    <div className="login">
      {user && <Navigate to={'/app'} replace />}
      <div className="login__content">
        {/* Form  Side */}
        <div className="login__content-form">
          <div className="title">
            <h2>Welcome Back!</h2>
            <p>We are glad to see you again. Let's start! </p>
          </div>

          <form>
            <div className="input-group">
              <input
                name="email"
                onChange={handleInputChange}
                placeholder="you-email@example.com"
                required
                type="email"
                value={email}
              />

              <input
                name="password"
                onChange={handleInputChange}
                placeholder="Personal Key"
                required
                type="password"
                value={password}
              />
            </div>

            <button type="button" onClick={() => handleSubmit()}>
              Log in
            </button>
          </form>
        </div>
        {/* Banner  Side*/}
        <div className="login__content-banner">
          <p>Stay connected anywhere!</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

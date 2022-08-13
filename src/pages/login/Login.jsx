import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__content-form">
          <div className="title">
            <h2>Welcome Back!</h2>
            <p>We are glad to see you again, let's start! </p>
          </div>

          <form>
            <div className="input-group">
              <input type="email" required placeholder='you-email@example.com' />
              <input type="password" required placeholder='Personal Key'/>
            </div>

            <button type="button">Log in</button>
          </form>
        </div>

        <div className="login__content-banner">
          <p>
          Stay connected anywhere!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

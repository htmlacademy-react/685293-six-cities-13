import {ChangeEvent, ReactElement, SyntheticEvent, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {AppRoute} from 'src/router';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';
import {loginAction} from 'src/store/api-actions.ts';
import {AuthorizationStatus} from 'src/router/private-route';

function LoginPage(): ReactElement {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((store) => store.authorizationStatus);


  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(`${AppRoute.Main}`);
    }
  },[authStatus, navigate]);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const onClickLoginButton = (e: SyntheticEvent) => {
    e.preventDefault();

    const passwordValidatePattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    if (passwordValidatePattern.test(password)) {
      dispatch(loginAction({
        password,
        email
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onClickLoginButton}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={onChangePassword}
                />
              </div>
              <button className="login__submit form__submit button" type="submit" >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

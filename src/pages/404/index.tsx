import {ReactElement, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch} from 'src/hooks/redux.ts';
import {setAppError} from 'src/store/action.ts';
import {AppRoute} from 'src/router';

function Page404(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAppError(null));
  }, [dispatch]);

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
            <h1 className="login__title">404</h1>
            <h2 className="login__title">Page not found</h2>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Page404;

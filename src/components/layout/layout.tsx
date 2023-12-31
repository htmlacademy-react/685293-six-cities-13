import {ReactElement} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';

import {AppRoute} from 'src/router';
import {AuthorizationStatus} from 'src/router/private-route';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.ts';
import {logoutAction} from '../../store/api-actions.ts';

interface LayoutProps {
  withFooter?: boolean;
}

function Layout(props: LayoutProps): ReactElement {
  const {withFooter} = props;

  const dispatch = useAppDispatch();

  const authStatus = useAppSelector((store) => store.authorizationStatus);
  const user = useAppSelector((store) => store.user);

  const onLogOutButtonClick = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <NavLink to={AppRoute.Main} className={({isActive}) => isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </NavLink>
            </div>
            <nav className="header__nav">
              {
                authStatus === AuthorizationStatus.Auth &&
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a
                        className="header__nav-link header__nav-link--profile"
                        href="#"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          {user?.email}
                        </span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" onClick={onLogOutButtonClick}>
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
              }
              {
                authStatus !== AuthorizationStatus.Auth &&
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              }
            </nav>
          </div>
        </div>
      </header>
      <Outlet/>
      {
        withFooter && (
          <footer className="footer container">
            <NavLink to={AppRoute.Main} className="footer__logo-link">
              <img
                className="footer__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={64}
                height={33}
              />
            </NavLink>
          </footer>
        )
      }
    </div>
  );
}

export default Layout;

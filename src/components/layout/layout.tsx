import {ReactElement} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {AppRoute} from 'src/router';

interface LayoutProps {
  withFooter?: boolean;
}

function Layout(props: LayoutProps): ReactElement {

  const {withFooter} = props;

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
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
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

import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute} from 'src/router';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

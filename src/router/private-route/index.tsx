import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AppRoute} from 'src/router';
import {useAppSelector} from 'src/hooks/redux.ts';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

type PrivateRouteProps = {
  children: ReactElement;
}

function PrivateRoute(props: PrivateRouteProps): ReactElement {
  const authStatus = useAppSelector((store) => store.authorizationStatus);

  const { children} = props;

  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

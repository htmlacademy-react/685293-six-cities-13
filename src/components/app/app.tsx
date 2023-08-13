import {ReactElement, useEffect} from 'react';

import Router, {AppRoute} from 'src/router';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';
import {checkAuthAction, fetchOffersAction} from 'src/store/api-actions.ts';
import { useNavigate} from 'react-router-dom';

function App():ReactElement {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const appError = useAppSelector((state)=> state.error);

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
  }, [dispatch]);


  if (appError) {
    navigate(`${AppRoute.NotFound}`);
  }

  return <Router/>;
}

export default App;

import {ReactElement, useEffect} from 'react';

import Router from 'src/router';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';
// import {AuthorizationStatus} from 'src/router/private-route';
import PageSpinner from 'src/components/page-spinner/page-spinner.tsx';
import {fetchOffersAction} from '../../store/api-actions.ts';

function App():ReactElement {
  const dispatch = useAppDispatch();

  // const authorizationStatus = useAppSelector((state)=> state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state)=> state.questionsLoadingStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (isOffersDataLoading) {
    return <PageSpinner/>;
  }

  return <Router/>;
}

export default App;

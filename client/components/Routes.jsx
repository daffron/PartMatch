import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
//import Callback from './Callback/Callback';
//import Auth from '../Auth/Auth';
//import history from './history';

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication(nextState.location.hash);
//   }
// }

export const makeMainRoutes = () => {
  return (
      <BrowserRouter history={history} >
          <App />
    
          {/*<Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>*/}
      </BrowserRouter>
  );
}
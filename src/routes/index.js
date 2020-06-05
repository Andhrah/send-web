import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Requestpage from '../components/Requestpage';
import RequestOfferPage from '../components/RequestOfferPage';
import ContactInfoPage from '../components/ContactInfo';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */

function Routes() {
  return (
    <BrowserRouter>
       <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/request" component={Requestpage} exact />
          <Route path="/request-offer" component={RequestOfferPage} exact />
          <Route path="/contact-info" component={ContactInfoPage} exact />
       </Switch>
    </BrowserRouter>
  )
}

export default Routes;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DogsPage from './containers/DogsPage';
import UserPhotosPage from './containers/UserPhotosPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/:userId" component={UserPhotosPage} />
      <Route path="/" component={DogsPage} />
    </Switch>
  </Router>
);

export default Routes;

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

const App = () => {
  return(
    <Router history={history}>
      <Switch>
        <Route path="/">
          <div data-testid="testComponent">Hello</div>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
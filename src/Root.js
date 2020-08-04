import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import GlobalLayout from './Layout';
import NotFound from './notfound';
import Home from './views/Home';
import Products from './views/Products';

const Root = () => (
  <GlobalLayout>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/products/:category" component={Products} />
      <Route path="*" component={Home} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);

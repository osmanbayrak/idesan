import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import GlobalLayout from './Layout';
import NotFound from './notfound';
import Home from './views/Home';
import Contact from './views/Contact';
import Products from './views/Products';

const Root = props => (
  <GlobalLayout history={props.history}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/products/:category" component={Products} />
      <Route exact path="/contact" component={Contact} />
      <Route path="*" component={Home} />
    </Switch>
  </GlobalLayout>
);

export default withRouter(Root);

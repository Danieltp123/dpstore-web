import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

export default function Pages(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Home} isPrivate />
      <Route component={():JSX.Element => <Redirect to="/" />} />
    </Switch>
  );
}

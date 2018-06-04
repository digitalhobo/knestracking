/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from 'containers/Auth/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { Background } from './style';

export default function App() {
  return (
    <Background>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/dashboard" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Background>
  );
}

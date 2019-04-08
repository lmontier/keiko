import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const Pokemon = lazy(() => import('./pages/Pokemon'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="pokedex/1" />} />
      <Route exact path="/pokedex/:page" component={Home} />
      <Route exact path="/pokemon/:id" component={Pokemon} />
    </Switch>
  </Suspense>
);

export default routes;

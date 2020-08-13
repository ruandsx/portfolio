import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

import ComingSoon from '../pages/ComingSoon';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/website" exact component={Home} />
    <Route path="/skills" exact component={Home} />

    <Route path="/contact" exact component={Contact} />
    <Route path="/portfolio" exact component={Portfolio} />

    <Route path="*" component={ComingSoon} />
  </Switch>
);

export default Routes;

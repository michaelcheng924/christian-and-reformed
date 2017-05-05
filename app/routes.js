import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'app/components/App';
import Home from 'app/components/Home';
import CatechismTraining from 'app/components/CatechismTraining';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={CatechismTraining} path="catechism-training" />
    </Route>
);

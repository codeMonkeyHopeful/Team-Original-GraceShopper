import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// remove Test component
const Test = props => {
  return <div>Testing</div>;
};

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route component={Test} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

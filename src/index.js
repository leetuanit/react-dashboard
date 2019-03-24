import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import indexRouter from './routes/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/board">
    <Switch>
      {indexRouter.map((route, index) => {
        return (<Route key={index} path={route.path} component={route.component} />);
      })}
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

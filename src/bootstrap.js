import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';

import Layout from "./components/layout";
import reducers from "./reducers";
import Signin from './components/auth/signin';
import Signup from "./components/auth/signup";



const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";
import history from './history';


function main() {
  ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
      <Layout>
        <Switch>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
        </Switch>

      </Layout>
    </Router>
      
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener("DOMContentLoaded", main);

import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DetalhesPage} from "./Pages/Detalhes";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { string } from 'prop-types';

const MeuLink = (props) =>(
  <Link className="meu-link" to = {props.to}>{props.children}></Link>
);
//Atribui valores padrao
MeuLink.defaultProps = {
  to:"/"
}
//Define os tipos das props (usando a biblioteca prop-types)
MeuLink.defaultProps = {
  to: string
}

function App(props) {

    return (
    <BrowserRouter>
    <MeuLink to="/">Home</MeuLink>
    <MeuLink to="/detalhes">Detalhes</MeuLink>
      <Switch>
      <Route component={Home} exact path="/"></Route>
      <Route component={DetalhesPage} path="/detalhes"></Route>
      <Route component={PageNotFound}> </Route>
      </Switch>
    </BrowserRouter>
      )
}

export default App;

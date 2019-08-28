import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Detalhes } from "./Pages/Detalhes";
import { Home } from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";

function App(props) {
    return <h1>Smoke {props.nome}</h1>;
}

export default App;

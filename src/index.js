import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
//import HelloWorld from './state-drills/HelloWorld'
//import Bomb from './state-drills/Bomb'
//import RouletteGun from './state-drills/RouletteGun'
//import Counter from './state/Counter'
import AppLang from './lang-context/AppLang';

ReactDOM.render(
    <AppLang />, 
    document.getElementById('root')
);
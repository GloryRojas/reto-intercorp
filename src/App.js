import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Intro from './views/Intro';
import Usuarios from './views/Usuarios';
import Calculos from './views/Calculos';
import NavBar from './components/NavBar';

const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Route path="/" exact component={Intro} />
      <Route path="/usuarios/" exact component={Usuarios} />
      <Route path="/calculos/" exact component={Calculos} />
    </Router>
  );
}

export default App;

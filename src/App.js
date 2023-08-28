import React from "react";
import Header from './header';
import './App.css';
import Home from './home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './checkout';
import Login from './login';


function App() {
  return (
   
    
    <div className="App">
    <Router>

    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
     </Route>
     <Route path="/">
     <Header />
     <Home />
     </Route>
     </Switch>
     </Router>
    </div>
    
  );
}

export default App;

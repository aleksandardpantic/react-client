import React  from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import {Login} from './components/pages/Login';
import Contact from './components/pages/Contact';
import {Signup} from './components/pages/Signup';
import {Popular} from './components/pages/Popular';
import Korisnik from './Korisnik';
import CustomPolica from './components/pages/CustomPolica';
import {Pretraga} from './components/pages/Pretraga'
import DodajKnjigu from './components/pages/DodajKnjigu';

function App() {
  
  
  return (
    <>
      <Router>
        <Navbar />
          
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/popular' exact component={Popular}/>
            <Route path='/shelf' exact component={CustomPolica}/>
            <Route path='/pretraga' exact component={Pretraga}/>
            <Route path='/dodavanjeknjige' exact component={DodajKnjigu}/>
          </Switch>
        
        
      </Router>
    </>
  );
}

export default App;

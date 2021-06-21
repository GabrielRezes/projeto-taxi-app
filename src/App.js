import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './contexts/appContext';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import InformLocation from './pages/InformLocation/InformLocation';
import ListPoints from '././pages/ListPoints/ListPoints';
import SearchStreet from '././pages/SearchStreet/SearchStreet';

import './App.css'


class App extends Component { 
  
   
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, setState: this.setState.bind(this) }}>  
        <Header />      
        <BrowserRouter> 
          <Navbar/>           
          <Switch>           
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/inform-location'>
                <InformLocation/>
              </Route>
              <Route path='/list-points'>
                <ListPoints/>
              </Route>
              <Route path='/search-street'>
                <SearchStreet/>
              </Route>
          </Switch>            
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default App

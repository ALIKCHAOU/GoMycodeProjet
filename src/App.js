import React, { Component } from 'react';
import Header from './compoments/header/Header';

import Contact from './compoments/Home/Contact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './App.css';
import Forms from'./compoments/Forms';
import { Route } from "react-router-dom";

import PartiMain from './compoments/PartiMain/PartiMain';
class App extends Component {
state={
  fileds:{},  sidedroweropen:false,
};
onChange=(updatedvalue)=>{
  this.setState({
    fileds:{
      ...this.state.fileds,
      ...updatedvalue}
  })
  

}
  render() {
    return (
      <div className="App">
      
              <Header />
        <Route exact path="/" component={PartiMain} />
        <Route exact path="/compoments/Home/Contact" component={Contact } />
        
   
      

        <footer>
         <Forms />
         </footer>
      </div>
    );
  }
}

export default App;

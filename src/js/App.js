import React, { Component } from 'react';
import Header from '../js/component/header/Header'
import Home from '../js/component/home/Home'
import '../css/App.css';

class App extends Component {
  render(){
    return (
      <div className="AppLayout">
        <div>
         <Header />
         <Home />
         </div>
      </div>
    );
  }
}

export default App;

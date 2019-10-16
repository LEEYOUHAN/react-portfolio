import React, { Component } from 'react';
import Header from '../js/component/header/Header'
import '../css/App.css';

class App extends Component {
  render(){
    return (
      <div className="AppLayout">
        <div>
         <Header />
         </div>
      </div>
    );
  }
}

export default App;

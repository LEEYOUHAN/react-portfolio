import React, { Component } from 'react';
import Header from '../js/component/header/Header'
import Home from '../js/component/home/Home'
import About from '../js/component/about/About'
import Skills from '../js/component/skills/Skills'
import '../css/App.css';

class App extends Component {
  render(){
    return (
      <div className="AppLayout">
        <div>
         <Header />
         <Home />
         <About />
         <Skills />
         </div>
      </div>
    );
  }
}

export default App;

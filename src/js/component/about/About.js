import React, { Component } from 'react';
import '../../../css/component/about/About.css';

class About extends Component {

  render() {
    return (
      <div className="about_me" id="a">
        <div className="about_me_title">
          <h1 className="hedding">About Me</h1>
        </div>
        <div className="about_me_content">
          <h1>Good Developer</h1>
          <section className="about_me_section">
            <p>I'm going to announce my dream.......
            </p>

            <p> My Goal....
            </p>
          </section>
        </div>
      </div>
 
    );
  }
}


export default About;
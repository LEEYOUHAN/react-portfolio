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
          <h1>A Good Developer</h1>
          <section className="about_me_section">
            <p>Since when I was a child, I had realized that the world was changing. I was always wondering how to make the new technologies like Smartphone, Responsive Web and the other IT.
I had a dream that is become Good Developer. So, whenever I needed something I always effort to learn and I try to keep up with the latest trends. If you give me the chance I will do my best.
            </p>

          </section>
        </div>
      </div>
 
    );
  }
}


export default About;
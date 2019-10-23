import React from 'react';
import '../../../css/component/contact/Contact.css';
import Github from '../skills/logo/github.png';
import Linkedin from '../skills/logo/linkedin.png';

const Contact = () => (
  <div className="Contact" id="c">
    <h1 className="Contact_hedding">CONTACT!</h1>
    <p className="Email"> Email : dldbgks7289@gmail.com </p>
    <a href="https://github.com/leeyouhan?tab=repositories"> <img src={Github} alt="github" className="Github"></img></a>
    <a href="https://ca.linkedin.com/in/leeyouhan?trk=people-guest_profile-result-card_result-card_full-click"> <img src={Linkedin} alt="linkedin" className="Linkedin"></img></a>
  </div>
);


export default Contact;
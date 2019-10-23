import React from 'react';
import '../../../css/component/skills/Skills.css';

import java from './logo/java.png';

import html from './logo/html.png';
import css from './logo/css.png';
import js from './logo/javascript.png';
import jquery from './logo/jquery.png';

import react from './logo/react.svg';
import nodejs from './logo/nodejs.png';

const Skills = () => (

  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">
        <h2 className="Skill_Title"> Launage</h2>
        <span className="Skill_Content">
            <div className="SKill_box">
                <div className="Skill_image_container" style={{backgroundImage: `url(${java})`}}><div className="Skill_label">Intermediate</div></div>
                <div className="Skill_image_container" style={{backgroundImage: `url(${js})`}}><div className="Skill_label">Intermediate</div></div>
            </div>
        </span>

        <h2 className="Skill_Title"> Web Skils</h2>
        <span className="Skill_Content">
            <div className="Skill_image_container" style={{backgroundImage: `url(${html})`}}><div className="Skill_label">Intermediate</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${css})`}}><div className="Skill_label">Intermediate</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${js})`}}><div className="Skill_label">Intermediate</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${jquery})`}}><div className="Skill_label">Intermediate</div></div>
        </span>

        <h2 className="Skill_Title"> FrameWork</h2>
        <span className="Skill_Content">
            <div className="Skill_image_container" style={{backgroundImage: `url(${react})`}}><div className="Skill_label">Basic</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${nodejs})`}}><div className="Skill_label">Basic</div></div>
        </span>

    </div>
  </div>
);

export default Skills;
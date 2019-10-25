import React from 'react';
import '../../../css/component/skills/Skills.css';

import java from './logo/java.png';

import html from './logo/html.png';
import css from './logo/css.png';
import js from './logo/javascript.png';
import jquery from './logo/jquery.png';

import react from './logo/react.svg';
import nodejs from './logo/nodejs.png';
import spring from './logo/spring.png';
import tomcat from './logo/tomcat.jpg';

import oracle from './logo/oracle.png';
import postgreSQL from './logo/postgreSQL.png';

import windows from './logo/windows.png';
import linux from './logo/linux.png';

import Github from '../skills/logo/github.png';

const Skills = () => (

  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skills </h1>
    <div className="Skill_Content">
        <h2 className="Skill_Title"> Launage</h2>
        <span className="Skill_Content">
            <div className="SKill_box">
                <div className="Skill_image_container" style={{backgroundImage: `url(${java})`}}><div className="Skill_label">Intermediate</div></div>
                <div className="Skill_image_container" style={{backgroundImage: `url(${js})`}}><div className="Skill_label">Intermediate</div></div>
            </div>
        </span>

        <h2 className="Skill_Title"> Web Skills</h2>
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
            <div className="Skill_image_container" style={{backgroundImage: `url(${spring})`}}><div className="Skill_label">Intermediate</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${tomcat})`}}><div className="Skill_label">Intermediate</div></div>
        </span>

        <h2 className="Skill_Title"> DataBase</h2>
            <div className="Skill_image_container" style={{backgroundImage: `url(${oracle})`}}><div className="Skill_label">Basic</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${postgreSQL})`}}><div className="Skill_label">Intermediate</div></div>
        <span className="Skill_Content">
        </span>

        <h2 className="Skill_Title"> Operating Systems</h2>
            <div className="Skill_image_container" style={{backgroundImage: `url(${windows})`}}><div className="Skill_label">Expert</div></div>
            <div className="Skill_image_container" style={{backgroundImage: `url(${linux})`}}><div className="Skill_label">Intermediate</div></div>
        <span className="Skill_Content">    
        </span>

        <h2 className="Skill_Title"> Etc</h2>
            <div className="Skill_image_container" style={{backgroundImage: `url(${Github})`}}><div className="Skill_label">Basic</div></div>
        <span className="Skill_Content">    
        </span>
    </div>
  </div>
);

export default Skills;
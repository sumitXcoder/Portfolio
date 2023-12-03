import { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import js from "../assets/img/skills/js.png";
import r from "../assets/img/skills/react.png";
import redux from "../assets/img/skills/Redux.png";

import node from "../assets/img/skills/node.jpeg";
import java from "../assets/img/skills/java.jpeg";
import python from "../assets/img/skills/python.jpeg";

import mysql from "../assets/img/skills/mysql.png";
import mongo from "../assets/img/skills/mongo.png";

import git from "../assets/img/skills/git.png";

import docker from "../assets/img/skills/docker.png"

const mySkills = {
  "Frontend": { "html": html, "css": css, "js": js, "react": r, "redux": redux },
  "Backend": { "node.js": node, "java": java, "python": python },
  "Database": { "mysql": mysql, "mongodb": mongo },
  "Version Control": { "git and github": git },
  "Containerisation": { "docker": docker }
}

function thresholdValue() {
  let value = 0;
  if (window.innerWidth > 800)
    value = 0.5;
  else if (window.innerWidth > 400)
    value = 0.25;
  return value;
}

export const Skills = () => {

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [threshold, setThreshold] = useState(thresholdValue());
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, { threshold: 0.25 + threshold });
    refs.forEach(ref => observer.observe(ref.current));
    window.onresize = () => {
      if (threshold !== thresholdValue())
        setThreshold(thresholdValue());
    }
  }, [threshold]);

  return (
    <section className="skill" id="skills">
      <h2>Skills</h2>
      <Container>{
        Object.keys(mySkills).map((skill, index) => {
          return (
            <SkillSet key={index} setRef={refs[index]} name={skill} data={mySkills[skill]} />)
        })
      }
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

function SkillSet({ setRef, name, data }) {
  return (
    <div ref={setRef} className="hide">
      <h3>{name} - </h3>
      <div className="wrapper">{
        Object.entries(data).map(([img, src]) => {
          return (
            <Skill key={img} img={img} src={src} />
          )
        })
      }
      </div>
      <br />
    </div>
  )
}

function Skill({ img, src }) {
  return (
    <div className="my-skill">
      <img src={src} alt={img} />
      <p>{img}</p>
    </div>
  )
}

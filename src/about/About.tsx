import React, { useState } from "react";
import "./About.css";
import { ProgressBar } from "react-bootstrap";
import ProfilePic from "../assets/ProfilePic.jpg";
import DockerLogo from "../assets/techImages/docker-logo.png";
import JavaLogo from "../assets/techImages/Java-logo.jpg";
import JenkinsLogo from "../assets/techImages/jenkins-logo.png";
import JSLogo from "../assets/techImages/JS-logo.png";
import AWSLogo from "../assets/techImages/logo_AWS.png";
import SQLLogo from "../assets/techImages/mySQL-logo.jpg";
import ReactLogo from "../assets/techImages/react-logo.svg";
import SpringLogo from "../assets/techImages/spring-logo.svg";
import TrelloLogo from "../assets/techImages/Trello_logo.svg.png";
import EmailImage from "../assets/techImages/say-hello.png";
import CollegeLogo from "../assets/education/Karunya-logo.png";
import SchoolLogo from "../assets/education/kvs-logo.png";
import CustomImage from "../custom/CustomImage";
import ArrowUpCircleIcon from "../assets/ArrowUpCircleIcon";

const techImagesList = [
  SpringLogo,
  JavaLogo,
  SQLLogo,
  ReactLogo,
  JSLogo,
  AWSLogo,
  DockerLogo,
  JenkinsLogo,
  TrelloLogo,
];

const skillSet = [
  { name: "Java", knowledge: 75 },
  { name: "Spring Boot", knowledge: 60 },
  { name: "JavaScript", knowledge: 70 },
  { name: "React hooks", knowledge: 70 },
  { name: "SQL", knowledge: 55 },
  { name: "GraphQL", knowledge: 30 },
  { name: "Data Structures & Algorithms", knowledge: 70 },
  { name: "HTML", knowledge: 80 },
  { name: "CSS", knowledge: 75 },
  { name: "Python", knowledge: 60 },
  { name: "Git", knowledge: 78 },
  { name: "AWS Cloud Services", knowledge: 40 },
];

const About = () => {

  const getAboutSection = () => {
    return (
      <div className="contentDiv">
        <div data-aos="slide-left" className="pictureDiv">
          <CustomImage
              id={"profilePicImg"}
              src={ProfilePic}
              className="profilePicImg"
              altText={"Profile Pic Img"}
              style={{ borderRadius: 200 / 2 }}
              showPopUp={true}
            />
        </div>
        <div data-aos="slide-right" className="contentTextDiv opaqBG">
          <h3>About</h3>
          <p>
            Technically savvy experienced Full Stack Developer Engineer with
            demonstrated history of working in the information technology and
            services industry and strong ability to determine projects optional
            feasibility and design, and implement correlating solutions.
          </p>
        </div>
      </div>
    );
  };

  const getTechImages = () => {
    return techImagesList.map((image, index) => {
      return (
        <CustomImage
              id={"TechImage " + (index + 1)}
              src={image}
              className="image-grid-item "
              altText={"Tech image " + (index + 1)}
              showPopUp={true}
            />
      );
    });
  };

  const getCoreCompetencySection = () => {
    return (
      <div className="contentDiv reverseContent">
        <div data-aos="slide-left" className="coreCompText opaqBG">
          <h3>Core Competences</h3>

          <ul className="rightAlignedList">
            <li>
              Skilled in Spring Boot, React hooks, Data Structures & Algorithms,
              DBMS
            </li>
            <li>Practice in Core Java, JavaScript, SQL, Python</li>
            <li>Experience in building micro services</li>
            <li>Have good understanding of clean code and best practices</li>
            <li>
              Hands-on with project management tools like Jira, Confluence,
              Trello
            </li>
            <li>Knowledge of AWS Cloud Services (EC2, S3, EMR and RDS)</li>
            <li>Jenkins, Docker, Git.</li>
          </ul>
        </div>
        <div data-aos="slide-right" className="pictureDiv">
          <div className="image-grid-container">{getTechImages()}</div>
        </div>
      </div>
    );
  };

  const getEducationSection = () => {
    return (
      <div className="contentDiv reverseContent">
        <div data-aos="slide-left" className="coreCompText opaqBG">
          <h3>Education</h3>
          <h5>Bachelor's Degree</h5>
          Karunya Institute of Technology and Sciences <br />
          June 2019
          <br />
          <br />
          <h5>Schooling</h5>
          Kendriya Vidyalaya AFS Yelahanka Bangalore
          <br />
          May 2015
        </div>
        <div data-aos="slide-right" className="pictureDiv eduImgMobile">
          <div className="edu-image-container">
            <CustomImage
              id="CollegeLogo"
              src={CollegeLogo}
              className="image-grid-item "
              altText={"College Logo"}
              showPopUp={true}
            />
            <CustomImage
              id="SchoolLogo"
              src={SchoolLogo}
              className="image-grid-item "
              altText={"School Logo"}
              showPopUp={true}
            />
          </div>
        </div>
      </div>
    );
  };

  const getSkillsSection = () => {
    return (
      <div className="contentDiv opaqBG">
        <table>
          <tr>
            <td></td>
            <td>
              <h3>Skills</h3>
            </td>
          </tr>
          {skillSet.map((skill) => {
            return (
              <tr>
                <td data-aos="slide-left">{skill.name}</td>
                <td data-aos="slide-right">
                  <ProgressBar variant="warning" now={skill.knowledge} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  };

  const getSayHiSection = () => {
    return (
      <div data-aos="slide-up" className="contentDiv">
        <div className="pictureDiv emailPicDiv">
          <a href="mailto:akshayrai75@gmail.com" title="Email me">
            <img src={EmailImage} height={80} width={"auto"} />
          </a>
        </div>
        <div className="contentTextDiv opaqBG centerText">
          <h3>Say Hi</h3>

          <a className="myEmail" href="mailto:akshayrai75@gmail.com" title="My email address">
            akshayrai75@gmail.com
          </a>
          <br />
        </div>
      </div>
    );
  };

  const backToTop = () => {
    return <a href="#" style={{position: "fixed", bottom: "1em", right: "1em"}} title="Back to top" >
      <ArrowUpCircleIcon />
    </a>
  }

  return (
    <div className="aboutHomeDiv">
      <div className="aboutDiv">
        {getAboutSection()}
        {getCoreCompetencySection()}
        {getSkillsSection()}
        {getEducationSection()}
        {getSayHiSection()}
        {backToTop()}
      </div>
    </div>
  );
};

export default About;

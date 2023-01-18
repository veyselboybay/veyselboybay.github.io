import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "./StyledHeading";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faSchool,
  faUserTie,
  faBriefcase,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faJava,
  faPython,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faAndroid,
  faJenkins,
  faDev,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className="sectionAbout" id="about">
      <Heading>
        <h2>About Me</h2>
      </Heading>
      <Container>
        <p>
          I, a software developer who is hard working, self-driven and
          motivated, would like to take on technical challenges and expreiences.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est totam
          temporibus distinctio explicabo corporis nemo aspernatur? Illo ad esse
          dicta exercitationem. Corrupti sed neque rem! Quod corporis
          consectetur pariatur amet?
        </p>
      </Container>
      <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faCode} /> Technologies
        </h2>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>General Programming Languages:</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faJava} /> JAVA, C#,{" "}
            <FontAwesomeIcon icon={faPython} /> PYTHON
          </Col>
          <Col md={6}>
            <SkillsHead>Front-End Web Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faHtml5} /> HTML5,{" "}
            <FontAwesomeIcon icon={faCss3} /> CSS3,{" "}
            <FontAwesomeIcon icon={faJs} /> JAVASCRIPT,{" "}
            <FontAwesomeIcon icon={faReact} /> REACTJS
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Back-End Web Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faNodeJs} /> NODEJS, EXPRESSJS,{" "}
            <FontAwesomeIcon icon={faJava} /> JAVA SPRING FRAMEWORK
          </Col>
          <Col md={6}>
            <SkillsHead>Mobile Application Development</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faAndroid} /> ANDROID STUDIO, FLUTTER/DART
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Database</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faCode} /> SQL(MYSQL), NOSQL(MONGODB)
          </Col>
          <Col md={6}>
            <SkillsHead>DevOps</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faJenkins} /> Jenkins,{" "}
            <FontAwesomeIcon icon={faDev} /> Azure DevOps
          </Col>
        </Row>
        <Row
          style={{ textAlign: "center", marginBottom: "20px" }}
          className="me-auto"
        >
          <Col md={6}>
            <SkillsHead>Cloud Computing</SkillsHead>
            {"  "}
            <FontAwesomeIcon icon={faAws} /> AWS
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </h2>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faSchool} />{" "}
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                  Software Engineering Technology
                </span>
                <br />
                Advanced Diploma <br />
                <span style={{ textAlign: "left" }}>
                  Centennial College, ON, Canada
                </span>
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                2020 - present <br />
                (Expected Grad. Apr 2023)
              </span>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <div
              style={{
                // width: "60vw",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            >
              <span style={{ float: "left", paddingLeft: "40px" }}>
                <FontAwesomeIcon icon={faSchool} />{" "}
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    paddingLeft: "10px",
                  }}
                >
                  International Relations
                </span>{" "}
                <br />
                Bachelor's Degree
                <br />
                <span style={{ textAlign: "left" }}>
                  Ege University, Izmir, Turkey
                </span>
              </span>
              <span
                style={{
                  float: "right",
                  paddingRight: "40px",
                  fontWeight: "bold",
                }}
              >
                2017
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faUserTie} /> Experience
        </h2>
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  // marginRight: "auto",
                  // marginLeft: "auto",
                  textAlign: "left",
                }}
              >
                <span style={{ paddingLeft: "40px", float: "left" }}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Software Developer Co-op
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>
                    Ontario Land Tribunal, Toronto, ON
                  </span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  May 2021 - Apr 2022
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  marginRight: "auto",
                  marginLeft: "auto",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <ul>
                  <li>
                    Developed and maintained code for company website primarily
                    using HTML, CSS and JavaScript
                  </li>
                  <li>
                    Manually tested site in browsers and mobile devices to
                    ensure cross-browser compatibility and responsiveness
                  </li>
                  <li>
                    Created fillable documents for customers' use so that they
                    can fill out the forms and save and download them
                  </li>
                  <li>
                    Worked on the newly generated CRM and helped the team
                    migrate the data from the old system to the new system,
                  </li>
                  <li>
                    Completed given tasks successfully in an allotted timeframe
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="aboutcontainer">
        <h2 style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faHandshakeAngle} /> Volunteer Activities
        </h2>
        <Container style={{ paddingTop: "20px" }}>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  // marginRight: "auto",
                  // marginLeft: "auto",
                  textAlign: "left",
                }}
              >
                <span style={{ paddingLeft: "40px", float: "left" }}>
                  <FontAwesomeIcon icon={faBriefcase} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                  >
                    Fund Raiser
                  </span>
                  <br />
                  <span style={{ paddingLeft: "25px" }}>UNICEF - TURKEY</span>
                </span>
                <span
                  style={{
                    float: "right",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Oct 2016 - Jan 2017
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  // width: "60vw",
                  marginRight: "auto",
                  marginLeft: "auto",
                  textAlign: "left",
                  paddingTop: "10px",
                }}
              >
                <ul>
                  <li>
                    We attempted to approach individuals to inform them about
                    UNICEF's initiatives and investments regarding where the
                    donations are spent and what sort of projects are done and
                    are being built in order to raise awareness of and encourage
                    individuals to develop the rights of every child. We
                    encourage them to assist UNICEF in reaching more kids by
                    participating in this initiative.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

const SkillsHead = styled.div`
  //   display: inline;
  padding-top: 20px;
  color: #fe7e6d;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
export default About;
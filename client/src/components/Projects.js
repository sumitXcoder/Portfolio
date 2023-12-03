import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/vc.png";
import projImg2 from "../assets/img/ie.png";
import projImg3 from "../assets/img/qg.png";
import projImg4 from "../assets/img/rf.png";
import projImg5 from "../assets/img/fm.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Voice Calculator",
      imgUrl: projImg1,
      projectUrl: "https://voice-calculator-sumitxcoder.vercel.app"
    },
    {
      title: "Image Editor",
      imgUrl: projImg2,
      projectUrl: "https://image-editor-sumitxcoder.vercel.app"
    },
    {
      title: "Quote Generator",
      imgUrl: projImg3,
      projectUrl: "https://quote-generator-sumitxcoder.vercel.app"
    },
    {
      title: "Food Menu",
      imgUrl: projImg5,
      projectUrl: "https://github.com/sumitXcoder/FoodMenu"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row lg={2}>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row lg={2}>
                          <ProjectCard title="Registration Form" imgUrl={projImg4} projectUrl="https://reg-client-sumitxcoder.vercel.app" />
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

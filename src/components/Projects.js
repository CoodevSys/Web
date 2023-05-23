import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
/* import colorSharp2 from "../assets/images/photo9.jpg" */
import photo1 from "../assets/images/photo6.jpg"
import photo2 from "../assets/images/photo7.jpg"
import photo3 from "../assets/images/photo8.jpg"
import photo4 from "../assets/images/photo9.jpg"
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () =>{
    const projects_movil = [
        {
            title: "Movil",
            description: "Design & Development",
            imgUrl: photo3
        }
    ]
    const projects_business = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: photo2
        },
    ]
    const projects = [
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo1
        },
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo4
        }, 
        {
            title: "Web",
            description: "Design & Development",
            imgUrl: photo1
        },  
    ]
    return (
      <section className="project" id="projects" >
      
        <Container>
            <Row>
                <Col>
                    <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                            <h2>Proyectos</h2>
                        </div>}
                    </TrackVisibility>
                    
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">{/* defaultActivateKey="/home" */}
                            <Nav.Item>
                                <Nav.Link eventKey="first">PAGINAS WEB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">APLICACIONES MOVILES</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">BUSINESS INTELLIGENCE</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
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
                                <Row>
                                    {
                                        projects_movil.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        projects_business.map((project,index) =>{
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>    
                </Col>
            </Row>
        </Container>
        {/* <img className="background-image-rigth" src={colorSharp2} alt=""></img> */}
      </section>  
    )
}
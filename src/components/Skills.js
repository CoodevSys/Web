import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faChartPie,faMobile } from '@fortawesome/free-solid-svg-icons'
import fondo1 from "../assets/images/photo8.jpg"
import fondo2 from "../assets/images/photo9.jpg"



/*@ cambios */

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill" id="skills">
            <div className="background-image-left">
                
            </div>
            <Container>            
                <Row>
                    {/* <Col>
                        <div className="skill-bx">
                            <h2>
                                Servicios
                            </h2>
                            <p>Ofrecemos</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <FontAwesomeIcon icon={faWindowRestore} />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faMobile} />
                                    <h5>Movil App</h5>
                                </div>
                                <div className="item">
                                    <FontAwesomeIcon icon={faChartPie} />
                                    <h5>Business Intelligence</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col> */}
                    <Col xs={12} md={6} xl={12}>
                        <h2 className="title_services">Servicios</h2>
                    </Col>
                    
                    
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">  
                    <Col xs={2} md={2} xl={10}>
                        <div className="skill-bx">
                            <h2>
                                Web Development
                            </h2>
                            <div className="item">
                                <FontAwesomeIcon icon={faWindowRestore} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} md={2} xl={10}>
                        <div className="skill-bx">
                            <h2>
                                Movil App
                            </h2>
                            <div className="item">
                                <FontAwesomeIcon icon={faMobile} />
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} md={2} xl={10}>
                        <div className="skill-bx">
                            <h2>
                                Business Intelligence
                            </h2>
                            <div className="item">
                                <FontAwesomeIcon icon={faChartPie} />
                            </div>
                        </div>
                    </Col>
                    </Carousel>
                </Row>

            </Container>
            

        </section>
    );
}
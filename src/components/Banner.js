import {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
/* import { ArrowRightCircle } from "react-bootstrap-icons" */
import logo from "../assets/images/logo.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollo Web.", "Aplicaciones Móviles.", "Business Intelligence."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2500;
    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () =>{ clearInterval(ticker) };
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 30) : fullText.substring(0, text.length + 3)
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return(
        <section className="banner" id="home">
            <path className="elementor-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>

            <Container>
                <Row className="align-items-center text-align-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {( { isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <span className="tagline">C O O D E V </span>
                                {/* <h1>{`Coodev is `}<span className="wrap">{text}</span></h1> */}
                                <p><span className="wrap">Coodev es una empresa comprometida a ofrecer
                                    soluciones personalizadas a nuestros clientes, diseñadas para satisfacer sus necesidades especificas de tecnologia. 
                                    </span>
                                </p>

                                <p className="wrap">Ofrecemos servicios profesionales de <span className="wrap wrap_text"> {text}</span></p>
                            </div>}
                            {/* <button onClick={() => console.log('connect')}>Button <ArrowRightCircle size={25}/></button> */}
                        </TrackVisibility>
                    </Col>
                    {/* <Col className="headder_col" xs={12} md={6} xl={4}>
                        <img src={logo} alt="headder" className="img_fondo"></img>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
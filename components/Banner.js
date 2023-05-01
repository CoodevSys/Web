import {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
/* import { ArrowRightCircle } from "react-bootstrap-icons" */
import logo from "../assets/images/logo.png"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2000;
    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)

        return () =>{ clearInterval(ticker) };
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
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
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center text-align-center">
                    <Col xs={12} md={6} xl={8}>
                        <span className="tagline">Welcome</span>
                        {/* <h1>{`Coodev is `}<span className="wrap">{text}</span></h1> */}
                        <p ><span className="wrap">Coodev es una empresa comprometida a ofrecer
                        soluciones personalizadas a nuestros clientes, diseñadas para satisfacer sus necesidades especificas de tecnologia. 
                        Ofrecemos servicios profesionales de desarrollo Web, Apps y Business Intelligence.</span></p>
                        {/* <button onClick={() => console.log('connect')}>Button <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    <Col className="headder_col" xs={12} md={6} xl={4}>
                        <img src={logo} alt="headder" className="img_fondo"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
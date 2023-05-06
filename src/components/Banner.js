import {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
/* import { ArrowRightCircle } from "react-bootstrap-icons" */
import logo from "../assets/images/logo.png"


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
            <Container>
                <Row className="align-items-center text-align-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">C O O D E V </span>
                        {/* <h1>{`Coodev is `}<span className="wrap">{text}</span></h1> */}
                        <p><span className="wrap">Coodev es una empresa comprometida a ofrecer
                            soluciones personalizadas a nuestros clientes, diseñadas para satisfacer sus necesidades especificas de tecnologia. 
                            </span>
                        </p>

                        <p className="wrap">Ofrecemos servicios profesionales de <span className="wrap wrap_text"> {text}</span></p>
                        {/* <button onClick={() => console.log('connect')}>Button <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    {/* <Col className="headder_col" xs={12} md={6} xl={4}>
                        <img src={logo} alt="headder" className="img_fondo"></img>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}
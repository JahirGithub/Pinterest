import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import styled from 'styled-components';



import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";

import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import img9 from "./img/img9.jpg";
import img10 from "./img/img10.jpg";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";

import img13 from "./img/img13.jpg";
import img14 from "./img/img14.jpg";
import img15 from "./img/img15.jpg";
import img16 from "./img/img16.jpg";
import img17 from "./img/img17.jpg";
import img18 from "./img/img18.jpg";





function Homecro() {

    
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSize = () => {
    const size = window.innerWidth;
    setWindowSize(size);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  }, []);

    if (windowSize<900) {
        return(<div></div>)
    }
    else{

    return (
        <>


            <Title style={{ textAlign: 'center' }}><h1>Get your Next</h1></Title>


            <ReactBootStrap.Carousel>
                <ReactBootStrap.Carousel.Item interval={500}>

                    <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'red' }}>
                        <h1>Top Technology Idea  </h1>

                        <DownButton id="down" className="open-btn">
                            <IconButton style={{ color: 'red' }}>
                                <ExpandMoreRoundedIcon />
                            </IconButton>
                        </DownButton>

                    </ReactBootStrap.Carousel.Caption>




                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45', display: 'flex' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img1} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img2} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img3} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img4} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img5} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img6} style={{ width: '250px', height: '', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={500}>

                    <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'green' }}>
                        <h1>Top Business Idea   </h1>

                        <DownButton id="down" className="open-btn">
                            <IconButton style={{ color: 'red' }}>
                                <ExpandMoreRoundedIcon />
                            </IconButton>
                        </DownButton>

                    </ReactBootStrap.Carousel.Caption>




                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45', display: 'flex' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img7} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img8} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img9} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img10} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img11} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img12} style={{ width: '250px', height: '', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Carousel.Item>
                <ReactBootStrap.Carousel.Item interval={500}>

                    <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'red' }}>
                        <h1>Garden Decoration Idea  </h1>

                        <DownButton id="down" className="open-btn">
                            <IconButton style={{ color: 'red' }}>
                                <ExpandMoreRoundedIcon />
                            </IconButton>
                        </DownButton>

                    </ReactBootStrap.Carousel.Caption>




                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45', display: 'flex' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img13} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img14} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img15} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img16} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img17} style={{ width: '250px', height: '450px', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>

                        <ReactBootStrap.Col className="col-2">
                            <ReactBootStrap.Card style={{ borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                                <ReactBootStrap.Card.Img variant="top" src={img18} style={{ width: '250px', height: '', borderRadius: '30px' }} className="img-fluid" />
                            </ReactBootStrap.Card>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Carousel.Item>



            </ReactBootStrap.Carousel>



        </>

    
    )
}
}

export default Homecro;



const Title = styled.div`  
    
    .h1 {
        font-size:500px;
    }

`
const DownButton = styled.div`
    justify-content:center;
    text-align: center;
`

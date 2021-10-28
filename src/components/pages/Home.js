import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import * as ReactBootStrap from "react-bootstrap";
import NavigationBar from './NavigationBar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';




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

import imgCar from "./img/crousal4.jpg";
import imgCar2 from "./img/crousal5.jpg";
import imgCar3 from "./img/crousal6.jpg";


function Header(props) {
  const [itemImgslist, setItemImgsList] = useState([]);

  useEffect(() => {
    // 192.168.31.192
    axios.get('http://localhost:4500/user/ViewallUserImg/')
      .then(response => {
        setItemImgsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div>
      <NavigationBar />

      <ReactBootStrap.Carousel>
        <ReactBootStrap.Carousel.Item interval={500}>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'red' }}>
            <h1>Top Technology Idea  </h1>
          </ReactBootStrap.Carousel.Caption>




          <ReactBootStrap.Row>
            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45', display: 'flex' }}>
                <ReactBootStrap.Card.Img variant="top" src={img1} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img2} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img3} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img4} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img5} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img6} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>




        </ReactBootStrap.Carousel.Item>



        <ReactBootStrap.Carousel.Item interval={250}>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: 'blue' }}>
            <h1>Garden Decoration Idea  </h1>

          </ReactBootStrap.Carousel.Caption>


          <ReactBootStrap.Row>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', display: 'flex', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img7} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img8} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img9} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img10} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img11} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img12} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

        </ReactBootStrap.Carousel.Item>



        <ReactBootStrap.Carousel.Item>

          <ReactBootStrap.Carousel.Caption style={{ marginBottom: '640px', color: '#e3780c' }}>
            <h1>Chai Time Snacks Idea  </h1>

          </ReactBootStrap.Carousel.Caption>

          <ReactBootStrap.Row>



            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', display: 'flex', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img13} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img14} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img15} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '330px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img16} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '220px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img17} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>

            <ReactBootStrap.Col sm={2}>
              <ReactBootStrap.Card style={{ width: '250px', borderRadius: '30px', marginTop: '100px', gridRowEnd: 'span 45' }}>
                <ReactBootStrap.Card.Img variant="top" src={img18} style={{ width: '250px', height: '450px', borderRadius: '30px' }} />
              </ReactBootStrap.Card>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>





<ReactBootStrap.Carousel variant="dark">
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={imgCar}
      alt="First slide"
      style={{height:'400px',width:'800px'}}
    />
    <ReactBootStrap.Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={imgCar2}
      alt="Second slide"
      style={{height:'400px',width:'800px'}}
    />
    <ReactBootStrap.Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src={imgCar3}
      alt="Third slide"
      style={{height:'400px',width:'800px'}}
    />
    <ReactBootStrap.Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>
<br /><br />





      <div className='divHome-bg'>

        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={4} gap={12}>
            {itemImgslist.map((item) => (
              <ImageListItem key={item.img_path}>
                <img
                  src={`${item.img_path}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <center>
                  <div>
                    <ImageListItemBar position="below" title={<span>By: @{item.authorname}</span>} />
                    <ImageListItemBar position="below" title={<span>catagory : {item.catagory}</span>} />
                    <ImageListItemBar position="below" title={<span>Uploaded at : {item.createdAt}</span>} />
                  </div>
                </center>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>


  )




}
export default Header;









// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     title: 'Bed',
//     author: 'swabdesign',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     title: 'Books',
//     author: 'Pavel Nekoranec',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     title: 'Sink',
//     author: 'Charles Deluvio',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//     title: 'Kitchen',
//     author: 'Christian Mackie',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//     title: 'Blinds',
//     author: 'Darren Richardson',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//     title: 'Chairs',
//     author: 'Taylor Simpson',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//     title: 'Laptop',
//     author: 'Ben Kolde',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//     title: 'Doors',
//     author: 'Philipp Berndt',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//     title: 'Coffee',
//     author: 'Jen P.',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//     title: 'Storage',
//     author: 'Douglas Sheppard',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//     title: 'Candle',
//     author: 'Fi Bell',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//     title: 'Coffee table',
//     author: 'Hutomo Abrianto',
//   },
// ];


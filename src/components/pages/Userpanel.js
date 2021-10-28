import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './NavigationBar';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function Userpanel() {

  const [itemImgslist, setItemImgsList] = useState([]);

  useEffect(() => {
    // 192.168.31.192
    axios.get('https://pinterestbackendgmit.herokuapp.com/user/ViewallUserImg/')
      .then(response => {
        setItemImgsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  let name = sessionStorage.getItem('name');
  return (
    <div>
      <NavigationBar />
      <br /><br />
      <h3>WELCOME {name}</h3>
      <br /><br />

      <div className='divHome-bg'>
        <Box>
          <ImageList variant="masonry" cols={4} gap={12}>
            {itemImgslist.map((item) => (
              <ImageListItem key={item.img_path}>
                <img
                  src={`${item.img_path}?w=248&fit=crop&auto=format`}
                  // srcSet={`${item.img_path}?w=248&fit=crop&auto=format&dpr=2 -2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={<span>By: @{item.authorname}</span>} />
                <ImageListItemBar position="below" title={<span>catagory : {item.catagory}</span>} />
                <ImageListItemBar position="below" title={<span>Uploaded at : {item.createdAt}</span>} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>

    </div>
  )
}

export default Userpanel;

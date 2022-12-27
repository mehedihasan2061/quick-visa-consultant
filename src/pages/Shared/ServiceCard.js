import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
   const {title,description,thubm_img,_id}= service
    return (
        <Col md="4">
        <Card className='my-3'>
          <CardActionArea>
            <PhotoProvider>
<PhotoView src={thubm_img}>
<CardMedia
              component="img"
              height="300"
              image={thubm_img}
              alt="green iguana"
            />
</PhotoView>

            </PhotoProvider>
           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary"  sx={{ lineHeight: 2 ,fontSize:"18px"}}>
               {description.slice(0,100)}... <Link className='m-3 ' to={`/service/${_id}`} size="small">see details</Link>
              </Typography>
            </CardContent>
           
              
            </CardActionArea>
          
        </Card>
      </Col>
    );
};

export default ServiceCard;
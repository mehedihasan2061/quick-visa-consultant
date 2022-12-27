import { Button } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Review from './Review';

const DetailsReview = () => {
  
    const data = useLoaderData()
   const {title,description,thubm_img,_id,price,ratings}=data
    return (
        <Container>
            <Row className='my-5 '>
            <Col md='7'>
              <PhotoProvider>
                <PhotoView src={thubm_img}>
                <img className='img-fluid' src={thubm_img} alt="" />
                </PhotoView>
              </PhotoProvider>
           

            </Col>

            <Col md='5'>
            <h2>{title}</h2>
           
           <p>{description}</p>

           <div className='d-flex justify-content-between'>
           <h5>price :{price}$</h5>
           <h5>Ratings:

{
  ratings ?
  <StarRatings
  rating={parseInt(ratings)}
  starDimension="30px"
  starSpacing="10px"
  starRatedColor="orange"
/>
:
<span className='text-danger ms-3'>no ratings</span>
}

           </h5>
           </div> 
           <div className="d-flex align-items-center justify-content-center">
        <Button className="my-4 text-center d-block" variant="contained" size="medium">
         <Link className="text-light" to='#'>Book Now</Link>
        </Button>
      </div>
            </Col>
            </Row>
            <hr />
          {/* review page section */}
          <Review
          id={_id}
          key={_id}
          />
        
        </Container>
    );
};

export default DetailsReview;
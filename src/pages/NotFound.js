import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../Assets/styles/notFound.css'


const NotFound = () => {
    return (
        <div className='notFound w-100'>
          <Container>
            <Row>
               <Col>
            
                <div className="fourOfourBg"></div>
                <h1 className="text-center notFoundTitle mb-2">404</h1>
                <div className="contentNotFound text-center">
                           <h3 >Looks Like You're Lost</h3>
                           <p>The page you are looking for not available</p>
                           <Link to='/' className='mainBtn' >Go to Home</Link>
                       </div>
              
               </Col>
            </Row>
            </Container>  
        </div>
    );
};

export default NotFound;
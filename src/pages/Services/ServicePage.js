import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Assets/Hooks/UseTitle';
import ServiceCard from '../Shared/ServiceCard';

const ServicePage = () => {
    UseTitle('Services')
    const services = useLoaderData()
   
    return (
        <Container>
           <h1 className="text-center my-5">our cool services</h1>

           <Row>
            
            {
                services.map(service=> <ServiceCard
                key={service._id}
                service={service}
                /> )
            }
           
           </Row>
        </Container>
    );
};

export default ServicePage;
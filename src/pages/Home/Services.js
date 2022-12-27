import {
  Button,
 
} from "@mui/material";
import React, {  useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



import ServiceCard from "../Shared/ServiceCard";



const Services = () => {

 
   
 


    const limit = 3
    const [services,setServices]=useState([])
    useEffect(()=>{
     
        fetch(`https://service-review-server-woad.vercel.app/services?limit=${limit}`,
        // {

          
        //     headers: {
        //       authorization: `Bearer ${localStorage.getItem('service-token')}`
          
        //   }

        // }
        )
        .then(res=>res.json())
        .then(data=>{
          
          setServices(data)
         
        })
        
    },[])

   
  
  return (
    <Container>
      <h2 className="text-center my-5">what you will get from here</h2>
      <Row>
        {
            services.map(service=> <ServiceCard
            key={service._id}
            service={service}
            />)
        }
      
      </Row>
      <div className="d-flex align-items-center justify-content-center">
        <Button className="my-4 text-center" variant="contained" size="medium">
         <Link className="text-light" to='/services'> Load More</Link>
        </Button>
      </div>
    </Container>
  );
};

export default Services;

import {
 
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Benifits = () => {
  const [benifits, setBenifits] = useState([]);

  useEffect(() => {
    fetch("https://service-review-server-woad.vercel.app/benifits")
      .then((res) => res.json())
      .then((data) => setBenifits(data));
  }, []);
console.log(benifits)
  return (
    <Container>
      <h2 className="text-center my-5">Why Choose Me</h2>

      <div>
        <Row className="align-items-center">
          <Col md="6">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-photo/accountant-office_1098-13392.jpg"
              alt="professional"
            />
          </Col>
          <Col md="6">
            <Row >
            {benifits.map((benifit) => (
             
                 <Col 
                  key={benifit._id}
                 lg='6' sm='12'>
                <Card className="my-3">
                  <CardContent>
                   
                    <Typography variant="h5" component="div">
                    {benifit.title}
                    </Typography>
                  
                    <Typography variant="body2">
                      {benifit.description}
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Col>
             
            ))}
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Benifits;

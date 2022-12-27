import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel fade className="position-relative">
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100 crimg "
          src="https://images3.alphacoders.com/210/210105.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Row>
            <Col lg="8">
            <div className="contentArea">
            <div className="left">
              <h2 className=" fw-bold d-1">SKILLED & BUSINESS IMMIGRATION</h2>
              <h4 className=" fw-bold">
                We Provide Clear Advice For Your Migration To Canada, Australia,
                USA
              </h4>
              <button className="btn btn-primary mt-3">get Started</button>
            </div>
          </div>
            </Col>
            <Col lg="4">
              <img className="img-fluid" src="https://c8.alamy.com/comp/R4HC0E/visa-cards-with-black-background-R4HC0E.jpg" alt="" />
            </Col>
          </Row>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75">
        <img
          className="d-block w-100 crimg "
          src="https://images3.alphacoders.com/210/210105.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <Row>
            <Col lg="8">
            <div className="contentArea">
            <div className="left">
              <h2 className=" fw-bold d-1">SKILLED & BUSINESS IMMIGRATION</h2>
              <h5 className=" fw-bold">
                We Provide Clear Advice For Your Migration To Canada, Australia,
                USA
              </h5>
              <button className="btn btn-primary mt-3">get Started</button>
            </div>
          </div>
            </Col>
            <Col lg="4">
              <img className="img-fluid" src="https://qph.cf2.quoracdn.net/main-qimg-0459ce4784400df602634e7fa4542f3e-lq" alt="" />
            </Col>
          </Row>
         
        </Carousel.Caption>
      </Carousel.Item>
   
    </Carousel>
  );
};

export default Slider;

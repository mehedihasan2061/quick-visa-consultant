import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spin = () => {
    return (
       <div className='spin-height d-flex align-items-center justify-content-center'>
         <div className='text-center'>
        <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
    </div>
       </div>
    );
};

export default Spin;
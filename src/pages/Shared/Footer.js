
import { CDBBox ,CDBFooter} from 'cdbreact';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import './../../Assets/styles/footer.css'

const Footer = () => {
    return (
        <CDBFooter className="shadow bg-dark footer">
          
        <CDBBox display="flex" flex="column" className="mx-auto py-5 text-white" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <Link className="d-flex align-items-center p-0 text-dark">
                {/* <img alt="logo" src={logo} width="80px" /> */}
                <span className="ml-3 h5 font-weight-bold text-white">Brains Academy</span>
              </Link>
              <p className="my-3" style={{ width: '250px' }}>
              With the helping of E-learning,Create Your own path and drive your skill in your own achive
             
              </p>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Brains Academy
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <Link to="/">Resources</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Contact</Link>
                <Link to="/blog">Blog</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <Link to="/">Support</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Sign In</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <Link to="/">Windframe</Link>
                <Link to="/">Loop</Link>
                <Link to="/">Contrast</Link>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ width: '100%' }}
            className="mx-auto mt-4"
          >
            <small className="text-center" style={{ width: '50%' }}>
              &copy; Brains Academy, 2022. All rights reserved.
            </small>
            <button  className="iconBtn">
             <FaFacebook className='socialIcon'/>
            </button>
            <button  className="iconBtn">
              <FaTwitter className='socialIcon'/>
            </button>
            <button  className="iconBtn">
             <FaInstagram className='socialIcon'/>
            </button>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    );
};

export default Footer;
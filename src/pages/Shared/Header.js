
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import logo from '../../Assets/images/apple-touch-icon.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Assets/contexts/AuthProvider';

const Header = () => {
  const {user,logout}= useContext(AuthContext)

  const handleLogout=()=>{
    logout()
    .then(()=>{
      toast.success("logout successfull")
  })
  .catch(err=>toast.error(err.message.slice(22,-2)))
  
  }
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/' className='text-light'>
            <img className='me-3' style={{height:'40px'}} src={logo} alt="" />
             Quick Visa Consultancy</Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <NavLink className='mx-2 fw-semibold text-light' to='/services'>services</NavLink>
           <NavLink className='mx-2 fw-semibold text-light' to='/reviews'>Reviews</NavLink>
           <NavLink className='mx-2 fw-semibold text-light' to='/add'>Add Service</NavLink>
          <NavLink  className='mx-2 fw-semibold text-light' to='/blogs'>Blogs</NavLink>
            
           
          </Nav>
          <Nav>
           
        { user?.uid ?
         <Button className='btn btn-primary' onClick={handleLogout}>Logout</Button>
          :
          <NavLink className='btn btn-primary mx-2' to='/login'>login</NavLink>
       
        }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
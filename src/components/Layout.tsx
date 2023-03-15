import React  from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Banner from './Banner';
const Layout :React.FC = (props:any) => {
  return (
    <>   
     <Navbar className='bg-white shadow-sm mb-3'>
      <Nav className='me-auto'>
     <Nav.Link as={Link} to="/">Home</Nav.Link>
     <Nav.Link as={Link} to="/Product">Product</Nav.Link>
     <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
     </Nav>
  </Navbar>
  <Banner/>
  <Container className='md-2'>{props.children}</Container>
</>
  )
}

export default Layout
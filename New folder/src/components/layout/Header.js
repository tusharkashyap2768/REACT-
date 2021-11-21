import React from "react";
//import {Navbar,Nav} from "reactstrap";
import { Navbar, NavbarBrand } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        
          LCO gitfire app
  
      </NavbarBrand>
    </Navbar>
//     <Navbar>
  
//     <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
//     <Navbar.Toggle />
//     <Navbar.Collapse className="justify-content-end">
//       <Navbar.Text>
//         Signed in as: <a href="#login">Mark Otto</a>
//       </Navbar.Text>
//     </Navbar.Collapse>
  
// </Navbar>
  );
};

export default Header;

/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Col,
  Row,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-white fixed-top" expand="lg">
        <Container>
        <div className="navbar-translate">
        <NavbarBrand to="/contact-us" tag={Link} id="navbar-brand">

        <img
          alt="..."
          src={require("assets/img/logo1.png")}
        ></img>

        &nbsp;&nbsp; 941-518-1657<br/>
        edmena24@gmail.com
        <br/>

                    </NavbarBrand>
                    <UncontrolledTooltip target="navbar-brand">
                      Contact us today!
                    </UncontrolledTooltip>

                    <button
                      onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(!collapseOpen);
                      }}
                      aria-expanded={collapseOpen}
                      className="navbar-toggler"
                    >

                      <span className="navbar-toggler-bar top-bar"></span>
                      <span className="navbar-toggler-bar middle-bar"></span>

                      <span className="navbar-toggler-bar bottom-bar"></span>
                    </button>
                  </div>

                  <Collapse isOpen={collapseOpen} navbar>

<Nav className="ml-auto align-items-center" id="ceva" navbar>

<UncontrolledDropdown nav>
 <a href="/presentation">
 <i
   aria-hidden={true}
   className="now-ui-icons business_bank"
 ></i>&nbsp;
 <span></span>
 <p>HOME&nbsp;</p>
 </a>
 </UncontrolledDropdown>
<UncontrolledDropdown nav>
 <a href="/AboutUs">
     <i
       aria-hidden={true}
       className="now-ui-icons business_globe"
     ></i>&nbsp;
     <span></span>
     <p>ABOUT US&nbsp;</p>
 </a>
 </UncontrolledDropdown>
 <UncontrolledDropdown nav>
   <DropdownToggle
     caret
     color="default"
     data-toggle="dropdown"
     id="navbarDropdownMenuLink"
     nav
     onClick={(e) => e.preventDefault()}
      >
     <i
       aria-hidden={true}
       className="now-ui-icons loader_gear"
     ></i>&nbsp;
     <span></span>

     <p style={{fontSize:"130%"}}>Services&nbsp;</p>
   </DropdownToggle>
   <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
     <DropdownItem tag={Link} to="/pavement">
       <i className="now-ui-icons ui-2_settings-90"></i>
       Pavers
     </DropdownItem>
     <DropdownItem tag={Link} to="/paint">
       <i className="now-ui-icons design-2_ruler-pencil"></i>
Painting
     </DropdownItem>

     <DropdownItem tag={Link} to="/pressureWashing">
       <i className="now-ui-icons education_atom"></i>
       Pressure Washing
     </DropdownItem>

   </DropdownMenu>
 </UncontrolledDropdown>
 <UncontrolledDropdown nav>
 <a href="/gallery">
     <i
       aria-hidden={true}
       className="now-ui-icons design_image"
     ></i>&nbsp;
     <span></span>
     <p>GALLERY&nbsp;</p>
 </a>
 </UncontrolledDropdown>
 <UncontrolledDropdown nav>
 <a href="/contact-us">
     <i
       aria-hidden={true}
       className="now-ui-icons files_paper"
     ></i>&nbsp;
     <span></span>
     <p>CONTACT US&nbsp;</p>
 </a>
 </UncontrolledDropdown>

</Nav>
                  </Collapse>
                </Container>
              </Navbar>
            </>
          );
        }
export default WhiteNavbar;

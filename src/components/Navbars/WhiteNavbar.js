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
<NavbarBrand to="/about-us" tag={Link} id="navbar-brand">
   SOLAFIDE
          </NavbarBrand>
          <UncontrolledTooltip target="navbar-brand">
            Designed by DC7. Coded by DC7
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
          <Nav className="ml-auto" id="ceva" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink1"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="now-ui-icons design_app"></i>
                <p>About Us</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                <DropdownItem to="/about-us" tag={Link}>
                  <i className="now-ui-icons design_image"></i>
                  Solafide Services
                </DropdownItem>
                <DropdownItem to="/examples#PlainCards" tag={Link}>
                  <i className="now-ui-icons business_chart-pie-36"></i>
                  Our Services
                </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;

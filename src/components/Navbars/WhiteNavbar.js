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
<NavbarBrand to="/presentation" tag={Link} id="navbar-brand">
<img
alt="..."
src={require("assets/img/logo1.png")}
></img>
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
                <DropdownItem to="/presentation2" tag={Link}>
                  <i className="now-ui-icons design_image"></i>
                  Solafide Services
                </DropdownItem>
              
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i
                  aria-hidden={true}
                  className="now-ui-icons files_paper"
                ></i>
                <p>Contact</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                <DropdownItem to="/sections#projects" tag={Link}>
                  <i className="now-ui-icons education_paper"></i>
                  Projects
                </DropdownItem>
                <DropdownItem to="/sections#pricing" tag={Link}>
                  <i className="now-ui-icons business_money-coins"></i>
                  Pricing
                </DropdownItem>
                <DropdownItem to="/sections#contact-us" tag={Link}>
                  <i className="now-ui-icons tech_mobile"></i>
                  Contact Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                id="navbarDropdownMenuLink"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i
                  aria-hidden={true}
                  className="now-ui-icons design_image"
                ></i>
                <p>Testimonials</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                <DropdownItem tag={Link} to="/about-us">
                  <i className="now-ui-icons business_bulb-63"></i>
                  About-us
                </DropdownItem>

                <DropdownItem tag={Link} to="/product-page">
                  <i className="now-ui-icons business_chart-bar-32"></i>
                  Product Page
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

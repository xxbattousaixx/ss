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

function DropdownFixedNavbar() {
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
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              tag="a"
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header>Dropdown header</DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
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
          <a href="/presentation">HOME</a>
        <Collapse isOpen={collapseOpen} navbar>


          <Nav className="ml-auto" id="ceva" navbar>
            <UncontrolledDropdown nav>
            <a href="/about-us">
                |<i
                  aria-hidden={true}
                  className="now-ui-icons business_globe"
                ></i>
                <span></span>
                <p>About Us|</p>
            </a>
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
              |  <i
                  aria-hidden={true}
                  className="now-ui-icons loader_gear"
                ></i>
                <p>Services</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                <DropdownItem tag={Link} to="/product-page">
                  <i className="now-ui-icons ui-2_settings-90"></i>
                  Paving
                </DropdownItem>
                <DropdownItem tag={Link} to="/product-page">
                  <i className="now-ui-icons design-2_ruler-pencil"></i>
  Painting
                </DropdownItem>

                <DropdownItem tag={Link} to="/product-page">
                  <i className="now-ui-icons education_atom"></i>
                  Pressure Washing
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
            <a href="/sections">
            |    <i
                  aria-hidden={true}
                  className="now-ui-icons design_image"
                ></i>
                <span></span>
                <p>Reviews|</p>
            </a>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
            <a href="/contact-us">
              |  <i
                  aria-hidden={true}
                  className="now-ui-icons files_paper"
                ></i>
                <span></span>
                <p>Contact Us|</p>
            </a>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </>
);
}
export default DropdownFixedNavbar;

import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DropdownWhiteNavbar from "components/Navbars/DropdownWhiteNavbar.js";
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <DropdownWhiteNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Send us a message</h2>
                  <p className="description">
                    You can contact us with anything related to our Products.
                    We'll get in touch with you as soon as possible. <br></br>
                    <br></br>
                  </p>
                  <Form action="https://postmail.invotes.com/send"
    method="post" id="contact_form" role="form">
    <input type="hidden" name="access_token" value="63yiwt3vt3p7kwh8m7zcdmd0" />
    <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
        <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />



                    <label>Your name</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Your Name..."
                        autoComplete="name"
                        placeholder="Your Name..."
                        type="text"
                        name="subject"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Email address</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Email Here..."
                        autoComplete="email"
                        placeholder="Email Here..."
                        type="email"
                        name="text"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Phone</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="number"
                        placeholder="Number Here..."
                        type="text"
                        name="extra_text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>

                    </InputGroup>
                    <label>Message</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_align-center"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Message Here..."
                        type="text"
                        name="extra_Message"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <div className="submit text-center">
                    <input type="hidden" name="access_token" value="63yiwt3vt3p7kwh8m7zcdmd0" />



 <input id="submit_form" type="submit" value="Contact Us" />

                     </div>
                  </Form>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal mt-5">
                    <div className="icon icon-info">
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br></br>
                        7652 Bucharest, <br></br>
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Edgar Mena <br></br>
                        +1 941 518 1657 <br></br>
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Legal Information</h4>
                      <p>
                        DC7. <br></br>
                        VAT · XXX <br></br>
                        IBAN · XXX <br></br>
                        Bank · XXX
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ContactUs;

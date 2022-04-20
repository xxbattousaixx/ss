import React from "react";
// react plugin used to create google maps

// reactstrap components
import {
  Form,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import animationData from "views/lotties/surf.json"; // reactstrap components
import WhiteNavbar from "components/Navbars/WhiteNavbar";
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import FooterBlackSocial from "components/Footers/FooterBlackSocial.js";

function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
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
      <WhiteNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Send us a message</h2>
                  <p className="description">
                    You can contact us with anything related to our services.
                    We'll get in touch with you as soon as possible. <br></br>
                    <br></br>
                  </p>
                  <Form
                    action="https://postmail.invotes.com/send"
                    method="post"
                    id="contact_form"
                    role="form"
                  >
                    <input
                      type="hidden"
                      name="access_token"
                      value="u3i8mym4hhvek1bb4z1p5qqv"
                    />
                    <input
                      type="hidden"
                      name="success_url"
                      value=".?message=Email+Successfully+Sent%21&isError=0"
                    />
                    <input
                      type="hidden"
                      name="error_url"
                      value=".?message=Email+could+not+be+sent.&isError=1"
                    />

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
                        type="text"
                        name="text"
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
                      ></Input>
                    </InputGroup>
                    <div className="submit text-center">
                      <input
                        type="hidden"
                        name="access_token"
                        value="63yiwt3vt3p7kwh8m7zcdmd0"
                      />

                      <input
                        id="submit_form"
                        type="submit"
                        value="Contact Us"
                      />
                    </div>
                  </Form>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Edgar Mena <br></br>
                        +1 941 518 1657 <br></br>
                        Mon - Fri, 8:00-18:00
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
                        Solafide Services LLC <br></br>
                      </p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900479.4260303846!2d-83.51405382615067!3d27.40805671871131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c337e69db2c22b%3A0xe335341d1d5715d9!2sSarasota%2C%20FL!5e0!3m2!1sen!2sus!4v1609108906889!5m2!1sen!2sus"
                      height="170vh"
                      width="340vh"
                      frameborder="0"
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <FooterBlackSocial />
      </div>
    </>
  );
}

export default ContactUs;

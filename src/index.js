import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "react-awesome-slider/dist/captioned.css";
import { render } from 'react-snapshot';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import ContactUs from "views/examples/ContactUs.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/AboutUs.js";

import "./styles.css";

// others

render(
  <Router>
    <Switch>
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/AboutUs" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route
        path="/nucleoicons"
        render={(props) => <NucleoIcons {...props} />}
      />

      <Redirect to="/presentation" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

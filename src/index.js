import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "react-awesome-slider/dist/captioned.css";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import LandingPage from "views/examples/LandingPage.js";
import NucleoIcons from "views/NucleoIcons.js";
import Presentation from "views/Presentation.js";
import Pricing from "views/examples/Pricing.js";
import ProductPage from "views/examples/ProductPage.js";
import Paint from "views/Paint.js";
import Pavement from "views/Pavement.js";
import Gallery from "views/Gallery.js";
import AboutUs from "views/AboutUs.js";

import "./styles.css";

import PressureWashing from "views/PressureWashing.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/gallery" render={(props) => <Gallery {...props} />} />
      <Route path="/AboutUs" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />

      <Route path="/paint" render={(props) => <Paint {...props} />} />
      <Route path="/pavement" render={(props) => <Pavement {...props} />} />
      <Route
        path="/pressureWashing"
        render={(props) => <PressureWashing {...props} />}
      />
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

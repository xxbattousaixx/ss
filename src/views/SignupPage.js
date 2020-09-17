import React from "react";

// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import Footer from "components/Footers/Footer.js";

// sections for this page

import Projects2 from "./sections-sections/Projects2.js";


function SignupPage() {
  React.useEffect(() => {
    document.body.classList.add("sections-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#/") + 2
    );
    var hrefId = href.substring(href.lastIndexOf("#") + 1);
    if (href.lastIndexOf("#") > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    return function cleanup() {
      document.body.classList.remove("sections-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <div className="section-space"></div>

        <Projects2 />


        <Footer />
      </div>
    </>
  );
}

export default SignupPage;

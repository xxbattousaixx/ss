import React from "react";

// reactstrap components

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";
import Footer from "components/Footers/Footer.js";

// sections for this page
import Headers from "./sections-sections/Headers.js";
import Features from "./sections-sections/Features.js";
import Blogs from "./sections-sections/Blogs.js";
import Teams from "./sections-sections/Teams.js";
import Projects3 from "./sections-sections/Projects3.js";
import Pricing from "./sections-sections/Pricing.js";
import Testimonials from "./sections-sections/Testimonials.js";
import ContactUs from "./sections-sections/ContactUs.js";

function ProfilePage() {
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

        <Projects3 />


        <Footer />
      </div>
    </>
  );
}


export default ProfilePage;

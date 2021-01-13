import React from "react";

// reactstrap components
// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();


  return (
    <>
      <div
        className="page-header clear-filter page-header-mini"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg14.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>

      </div>
    </>
  );
}

export default ProfilePageHeader;

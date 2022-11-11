import React from "react";

export default function Appointment(props) {
  const { appointmentMade } = props;
  if (appointmentMade) {
    return (
      <>
        <br />
        Your appointment has been booked!
        <br />
        We will contact you by e-mail if needed.
      </>
    );
  } else {
    return null;
  }
}

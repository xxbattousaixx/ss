/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import {
  signInToGoogle,
  initClient,
  getSignedInUserEmail,
  signOutFromGoogle,
  publishTheCalenderEvent,
} from "./GoogleApiService";
import "./Calendar1.css";
import moment from "moment";
import Appointment from "components/Appointment.js";
var event = {
  summary: "Appointment",
  location: "SOLAFIDE",
  description: "default",
  start: {
    dateTime: "2021-07-10T09:00:00-07:00",
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: "2021-07-10T17:00:00-07:30",
    timeZone: "America/Los_Angeles",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  attendees: [{ email: "lpage@example.com" }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
};
export default function Calendar1() {
  const [signedin, setSignedIn] = useState(false);
  const [googleAuthedEmail, setgoogleAuthedEmail] = useState(null);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [appointmentMade, setAppointmentMade] = React.useState(false);

  const getGoogleAuthorizedEmail = async () => {
    let email = await getSignedInUserEmail();
    if (email) {
      setSignedIn(true);
      setgoogleAuthedEmail(email);
    }
  };
  const getAuthToGoogle = async () => {
    let successful = await signInToGoogle();
    if (successful) {
      getGoogleAuthorizedEmail();
    }
  };
  const _signOutFromGoogle = () => {
    let status = signOutFromGoogle();
    if (status) {
      setSignedIn(false);
      setgoogleAuthedEmail(null);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    var event = {
      description,
      summary: "Appointment",
      location: "SOLAFIDE",
      start: {
        dateTime: moment(startTime),
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: moment(endTime),
        timeZone: "America/Los_Angeles",
      },
      attendees: [{ email: googleAuthedEmail }],
    };
    publishTheCalenderEvent(event);
  };
  useEffect(() => {
    initClient((success) => {
      if (success) {
        getGoogleAuthorizedEmail();
      }
    });
  }, []);

  return (
    <div className="calenderEvent-wrapper">
      <div className="header"></div>
      {!signedin ? (
        <div className="google-login">
          <p>Login in to Google</p>
          <button onClick={() => getAuthToGoogle()}>Sign In</button>
        </div>
      ) : (
        <div className="body">
          <div className="signout">
            <p>Email: {googleAuthedEmail}</p>
            <button onClick={() => _signOutFromGoogle()}>Sign-Out</button>
          </div>
          <form>
            <div className="eventItem">
              <label>Description</label>
              <input
                type="text"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="eventItem">
              <label>Start Time</label>
              <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              ></input>
            </div>
            <div className="eventItem">
              <label>End Time</label>
              <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              ></input>
            </div>
            <Appointment appointmentMade={appointmentMade} />

            <button
              type="submit"
              onClick={(e) => {
                submit(e);
                setAppointmentMade(true);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

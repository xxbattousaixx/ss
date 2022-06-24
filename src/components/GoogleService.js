/* eslint-disable no-undef */
import moment from "moment";

const getGoogleAuthorizedEmail = async () => {
  let email = await getSignedInUserEmail();
  if (email) {
    setSignedIn(true);
    setgoogleAuthedEmail(email);
  }
};
const getAuthToGoogle = async () => {
  let successfull = await signInToGoogle();
  if (successfull) {
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
  var event = {
    description,
    start: {
      dateTime: moment(startTime),
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: moment(endTime),
      timeZone: "America/Los_Angeles",
    },
  };
  publishTheCalenderEvent(event);
};

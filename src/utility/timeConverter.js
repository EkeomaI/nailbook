//this function accepts milliseconds since 1 Jan 1970
// till the current time a post was created and returns
// either the current seconds, minutes, days, weeks, months
// years.

export default function timeConverter(previousTimeStamp) {
  let currentTimeStamp = Date.now();
  let numberOfSec = (currentTimeStamp - previousTimeStamp) / 1000;

  let numberOfYears = Math.floor(numberOfSec / (52 * 7 * 24 * 3600));
  let numberOfWeeks = Math.floor(numberOfSec / (7 * 24 * 3600));
  let numberOfDays = Math.floor(numberOfSec / (24 * 3600));
  let numberOfHours = Math.floor(numberOfSec / 3600);
  let numberOfMinutes = Math.floor(numberOfSec / 60);
  let numberOfSeconds = numberOfSec;

  if (numberOfSeconds < 60) {
    return numberOfSeconds.toString() + " s";
  }
  if (numberOfMinutes < 60) {
    return numberOfMinutes.toString() + " m";
  }
  if (numberOfHours < 24) {
    return numberOfHours.toString() + " h";
  }
  if (numberOfDays < 7) {
    return numberOfDays.toString() + "d";
  }
  if (numberOfWeeks < 52) {
    return numberOfWeeks.toString() + " w";
  } else {
    return numberOfYears.toString() + " y";
  }
}

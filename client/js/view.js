/**
 * should have a ClockUI
 * the UI should do several things
 * take what ever is "now" and append "now" to the clock elements
 * 
 */

class $Clock {
  constructor() {
    this.clock = new Clock();
    this.clock.addProcesses(
      this.logTime,
      this.renderHours,
      this.renderMinutes,
      this.renderSeconds,
      this.parseAMorPM
    );
  }
  logTime(time) {
    console.log(time);
  }
  renderHours(time) {
    let hours = time.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    hours = hours.toString();
    document.getElementById("hours").textContent = hours;
  }
  renderMinutes(time) {
    let minutes = time.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    minutes = minutes.toString();
    document.getElementById("minutes").textContent = minutes;
  }

  renderSeconds(time) {
    let seconds = time.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    seconds = seconds.toString();
    document.getElementById("seconds").textContent = seconds;
  }

  parseAMorPM(time) {
    let hours = time.getHours();
    if (hours >= 12) {
      document.getElementById("seconds").textContent += "PM";
    } else {
      document.getElementById("seconds").textContent += "AM";
    }
  }
}

window.onload = function() {
  new $Clock();
};

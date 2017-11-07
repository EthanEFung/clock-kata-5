const assert = require("assert");

/**
 * should have a clock model
 * clock model should have processes
 * every time frame or "tick" the processes should be run
 */

/**
 * should have a ClockUI
 * the UI should do several things
 * take what ever is "now" and append "now" to the clock elements
 * 
 */

const { Clock } = require("../client/js/models.js");
console.log("this is the clock", Clock);
describe("clock model", function() {
  it("should have a function that executes a series of processes", function() {
    const myClock = new Clock();
    assert.equal(!!myClock.tick, true);
  });
});

describe("clock UI", function() {});

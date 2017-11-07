/**
 * should have a clock model
 * clock model should have processes
 * every time frame or "tick" the processes should be run
 */

class Clock {
  constructor() {
    this.processes = [];
    let second = 1000; // milliseconds
    setInterval(this.tick.bind(this), second);
  }
  tick() {
    let now = new Date();
    this.processes.forEach(process => process(now));
  }

  addProcesses(...process) {
    this.processes.push(...process);
  }
}

/**
 * user browser console to test this
 * start with creating StopWatch object =>
 *      const sw = new StopWatch();
 * perform all the operations on object 'sw'
 *
 * Not good practise to do this
 * Only for learning purpose
 */

StopWatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started.");
  }

  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is not started.");
  }

  this.running = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

function StopWatch() {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
}

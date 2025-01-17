// Giorgio Timothy Suharianto
// JSCRIPT 320 - Week 1

// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = function () {
//   var instance = this;
//   var timerInterval = setInterval(function () {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const TimerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(TimerInterval);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(
  id,
  endtime,
  hoursSelector,
  minutesSelector,
  secondsSelector
) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector(hoursSelector);
  var minutesSpan = clock.querySelector(minutesSelector);
  var secondsSpan = clock.querySelector(secondsSelector);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(endtime) + 24 * 60 * 60 * 1000);
      initializeClock(
        id,
        deadline,
        hoursSelector,
        minutesSelector,
        secondsSelector
      );
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'September 31 2024 00:00:00 GMT+0200';
initializeClock('countdown', deadline, '.hours', '.minutes', '.seconds');
initializeClock(
  'countdown-two',
  deadline,
  '.hours-two',
  '.minutes-two',
  '.seconds-two'
);
// initializeClock(
//   'countdown-three',
//   deadline,
//   '.hours-three',
//   '.minutes-three',
//   '.seconds-three'
// );

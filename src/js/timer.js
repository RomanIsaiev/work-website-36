function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(
  id,
  endtime,
  daysSelector,
  hoursSelector,
  minutesSelector,
  secondsSelector
) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(daysSelector);
  var hoursSpan = clock.querySelector(hoursSelector);
  var minutesSpan = clock.querySelector(minutesSelector);
  var secondsSpan = clock.querySelector(secondsSelector);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(endtime) + 24 * 60 * 60 * 1000);
      initializeClock(
        id,
        deadline,
        daysSelector,
        hoursSelector,
        minutesSelector,
        secondsSelector
      );
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'May 7 2024 09:00:00 GMT+0200';
initializeClock(
  'countdown',
  deadline,
  '.days',
  '.hours',
  '.minutes',
  '.seconds'
);
initializeClock(
  'countdown-two',
  deadline,
  '.days-two',
  '.hours-two',
  '.minutes-two',
  '.seconds-two'
);

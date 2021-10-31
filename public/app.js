const time = document.getElementById("time");
const greeting = document.getElementById("greeting");

// show time
const showTime = () => {
  let today = new Date();

  (hour = today.getHours()), (minute = today.getMinutes());

  // set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  //   output time
  time.innerHTML = `${hour}<span>:</span>${minute}`;

  setTimeout(() => {
    showTime();
  }, 1000);
};

// run
showTime();

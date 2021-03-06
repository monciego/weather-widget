const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const date = document.getElementById("date");

// show time
const showTime = () => {
  let today = new Date();

  (hour = today.getHours()), (minute = today.getMinutes());

  // set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  //   output time
  time.innerHTML = `${hour}<span>:</span>${addZero(minute)}`;

  setTimeout(() => {
    showTime();
  }, 1000);
};

// add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set date
const setDate = () => {
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  date.innerHTML = today.toLocaleDateString("en-US", options);
};

// set greeting
const setGreeting = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    greeting.textContent = "Good morning";
  } else if (hour < 18) {
    // afternoon
    greeting.textContent = "Good afternoon";
  } else {
    // evening
    greeting.textContent = "Good evening";
  }
};

// run
showTime();
setDate();
setGreeting();

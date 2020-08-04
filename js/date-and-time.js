const clockContainer = document.querySelector(".clock"),
  clockTime = clockContainer.querySelector("h1");
const dateContainer = document.querySelector(".header__date"),
  dateTime = dateContainer.querySelector("h4");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const datedate = date.getDate();
  const year = date.getFullYear();

  const textMonth = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  const textDay = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  const month = textMonth[date.getMonth()];
  const day = textDay[date.getDay()];
  clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  dateTime.innerText = `${day}, ${month} ${datedate}, ${year}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

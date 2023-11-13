const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let secondsDegrees = 0;
let minutesDegrees = 0;
let hoursDegrees = 0;

function setDate () {
  const now = new Date();

  const milliseconds = now.getMilliseconds();
  const seconds = now.getSeconds() + (milliseconds / 1000);
  secondsDegrees = ((seconds / 60) * 360) + 90;
  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  }
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes() + (seconds / 60);
  minutesDegrees = ((minutes / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours() + (minutes / 60);
  hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 10);
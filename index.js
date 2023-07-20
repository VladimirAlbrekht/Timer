//Timer
let endDate = new Date("2023-07-22"); // Здесь нужно добавить конечную дату в таком же формате
const timer = document.querySelector('.timer__container'); 
const timerDays = timer.querySelector('.timer__days');
const timerHours = timer.querySelector('.timer__hours');
const timerMinutes = timer.querySelector('.timer__minutes');
const timerSeconds = timer.querySelector('.timer__seconds');

function addZero(num) {
    if (num < 10) {
        return '0' + num;
    } else return num;
}
function countdownTimer(endDate, display) {
    let intervalId = setInterval(function () {
        let now = new Date().getTime();
        let distance = endDate - now;

        if (distance < 0) {
            clearInterval(intervalId);
            display.textContent = "Событие уже началось!";
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerDays.textContent = addZero(days);
        timerHours.textContent = addZero(hours);
        timerMinutes.textContent = addZero(minutes);
        timerSeconds.textContent = addZero(seconds);

    }, 1000);
}

countdownTimer(endDate, timer);
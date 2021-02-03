let spanMinutes = document.getElementById('minutes');
let spanSeconds = document.getElementById('seconds');

let stringDateQuery = window.location.search.substring(1);
const querySplit = stringDateQuery.split(':');
let hourQuery = querySplit[0];
let minuteQuery = querySplit[1];

let countdownDate = new Date();
countdownDate.setHours(parseInt(hourQuery), parseInt(minuteQuery), 0);

let myFunc = setInterval(function() {
    let now = new Date().getTime();
    let timeleft = countdownDate - now;

    let minutes = Math.floor((timeleft % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((timeleft % (1000*60)) / (1000));

    
    spanMinutes.innerHTML = minutes.toString().padStart(2, '0');
    spanSeconds.innerHTML = seconds.toString().padStart(2, '0');

    if (minutes == 0 && seconds == 0) {
        clearInterval(myFunc);
    }
}, 1000);

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let countDownDate = new Date('September 29, 2023 23:59:59').getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((dateDiff % (1000 * 60)) / (1000))

    days.innerHTML = day < 10 ? '0' + day : day;
    hours.innerHTML = hour < 10 ? '0' + hour : hour;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = second < 10 ? '0' + second : second;

}, 1000)
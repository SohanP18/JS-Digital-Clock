let hrs = document.getElementById('hrs')
let mins = document.getElementById('min')
let secs = document.getElementById('sec')

setInterval( () => {

    let curTime = new Date();

    hrs.innerHTML = curTime.getHours();
    mins.innerHTML = curTime.getMinutes();
    secs.innerHTML = curTime.getSeconds();

} ,1000);
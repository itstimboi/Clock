function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    let months = now.getMonth();
    let days = now.getDay();
    let years = now.getFullYear();
    
    hours = hours % 12; 
    hours = hours ? hours : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
    document.getElementById("days").textContent = days;
    document.getElementById("months").textContent = months;
    document.getElementById("years").textContent = years;
}

setInterval(updateTime, 1000)

updateTime();

// Function that displays time by intervals.
function displayTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

// Display time every ten seconds.
let display = setInterval(displayTime, 10000);

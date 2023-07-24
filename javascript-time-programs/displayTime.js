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


// Revision of previous function only with a clear interval.
let count = 0;
let interval = setInterval(function(){

    // Increase count by 1.
    count += 1;

    // Stop count after 5 returns.
    if(count === 5){
        clearInterval(interval);
    }

    // Display time. 
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);
/*
"7:15:54 PM"
"7:15:56 PM"
"7:15:58 PM"
"7:16:00 PM"
"7:16:02 PM"
*/

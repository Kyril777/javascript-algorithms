// Function that accepts a message at a delayed time.
function delayedGreeting($message, $time) {
	setTimeout(() => {  console.log($message); }, $time);
}

delayedGreeting('Hello mundo!', 3000); // Hello mundo! (with a 3 second delay)

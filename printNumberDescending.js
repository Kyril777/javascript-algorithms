// Prints numbers in descending order using recursion.

function descendingNumber(digit) {

    // display the number
    console.log(digit);

    // decrease the number value
    const newDigit = digit - 1;

    // base case
    if (newDigit > 0) {
        countDown(newDigit);
    }
}

descendingNumber(4);

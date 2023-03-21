
// Create a function that will start the stopwatch
function startStopwatch(){
    // Create a variable to store the start time
    let startTime = Date.now();
    // Return the startTime
    return startTime;
}

// Create a function that will stop the stopwatch
function stopStopwatch(startTime){
    // Create a variable to store the end time
    let endTime = Date.now();
    // Calculate the difference between the start and end time
    let timeDifference = endTime - startTime;
    // Return the time difference
    return timeDifference;
}

// Create a function to reset the stopwatch
function resetStopwatch(){
    // Set the startTime and endTime variables to 0
    startTime = 0;
    endTime = 0;
    // Return the startTime and endTime
    return startTime, endTime;
}

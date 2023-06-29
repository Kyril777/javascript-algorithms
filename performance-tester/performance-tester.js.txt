/* Measure JS function performance/speed. */
const calculateFunctionPerformance = (callbackFunction) => {
  const initialTime = performance.now();
  callbackFunction();
  const endTime = performance.now();
  return endTime - initialTime;
}

const testFunction = () => {
  // Code to be tested for function performance.
};

const elapsedTime = calculateFunctionPerformance(testFunction);
console.log(`Elapsed time: ${elapsedTime}ms`);

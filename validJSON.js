/* Function to test if params is a valid JSON. */

const validJSON = params => {
  try {
    JSON.parse(params);
    return true;
  } catch (e) {
    return false;
  }
};

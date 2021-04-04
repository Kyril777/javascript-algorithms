/* Bucket sort. */

const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucket = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  );
  arr.forEach(value => {
    bucket[Math.floor((value - min) / size)].push(value);
  });
  return bucket.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

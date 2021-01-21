function countingValleys(steps, path) {
  let score = 0;

  return [...path].reduce((sum, value, idx) => {
    if (value === "U") score++;
    if (value !== "U") score--;
    if (value === "U" && score === 0) sum++;
    return sum;
  }, 0);
}

//! https://www.hackerrank.com/challenges/counting-valleys/problem

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cache = {};
  const dp = (i, j) => {
    if (i === 0 || j === 0) {
      return 1;
    }
    const key = `${i}-${j}`;
    if (cache[key]) {
      return cache[key];
    }
    return (cache[key] = dp(i, j - 1) + dp(i - 1, j));
  };
  return dp(m - 1, n - 1);
};

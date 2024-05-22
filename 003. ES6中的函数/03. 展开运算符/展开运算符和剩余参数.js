const nums = [3, 12, 6, 1, 4];
const newNums = [1, 2, ...nums];
// const newNums = [1,2,3,12,6,1,4]

// 剩余参数
function printSum(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(sum);
}

printSum(...nums);

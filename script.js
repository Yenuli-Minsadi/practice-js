const nums = [1,2,3,4,5];

// for (let i = 1; i <= nums.length; i++) {
//     console.log(nums[i]);
// }

// let i=0
// while (i<nums.length) {
//     console.log(nums[i]);
//     i++;
// }

//// Iterator Methods /////
// const functionPassed = (num) => {
//     console.log(num);
// }
//
// nums.forEach(functionPassed);

nums.forEach((num, index) => {
    console.log(num, index);
});


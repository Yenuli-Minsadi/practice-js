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

//map- array eke hama element ekkma map wela aluth array ekk hadenw, foreach eka ehema aluth array ekk return krnne na
// but map eke aluth array ekk return krnw, foreach eke ehema krnnann empty array ekk hdl manually values push krnna wenna eh empty array ekt
const newNums = nums.map((num) => {
    return num*2;
});

console.log(newNums);

//filter - condition ekk true/ false da blala eh condition eka meet wenwnn aluth array ekk hdl eka return krnw
const newNums = nums.filter((num) => {
    return num % 2 === 0;
});

console.log(newNums);


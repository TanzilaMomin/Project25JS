const nums=[3,15,7,1,11];

const bigNum=nums.reduce((acc,curr)=>acc>curr ? acc:curr)
console.log(bigNum);

const smallNum=nums.reduce((acc,curr)=>acc<curr ? acc : curr)
console.log(smallNum);
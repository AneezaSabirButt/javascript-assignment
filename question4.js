// function secondLargest(arr) {
//     let firstLargest = arr.MIN_SAFE_INTEGER;
//     console.log(firstLargest)
// }
// secondLargest([1,2,3,4,5])
// let arr=[1, 2, 3, 4, 5];
// let firstLargest = Number.MIN_VALUE;
// let secondLargest = firstLargest;
// for(tempNumber of arr){
//    if(tempNumber > firstLargest){
//       secondLargest = firstLargest;
//       firstLargerNumber = tempNumber;
//    }
//    else if(tempNumber > secondLargest){
//       secondLargest = tempNumber;
//    }
// }
// console.log("The second largest number="+secondLargest);

let arr = [10, 20, 50, 30, 90];
let firstLargerNumber = Number.MIN_VALUE;
let secondLargerNumber = firstLargerNumber;
for(tempNumber of arr){
   if(tempNumber > firstLargerNumber){
      secondLargerNumber = firstLargerNumber;
      firstLargerNumber = tempNumber;
   }
   else if(tempNumber > secondLargerNumber){
      secondLargerNumber = tempNumber;
   }
}
console.log("The second largest number="+secondLargerNumber);
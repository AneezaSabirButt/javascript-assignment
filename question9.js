// var sum = 0;
// for (let i = 1; i <= 20; i += 2) {
//     sum += i;
// }

  // let's divide the value by 2
  // if the remainder is not a zero then it's an odd number
function sumOfodd(n) {
    sum = 0
    for(i = 0; i <= n; i++)
    {
        if(i % 2 != 0)
        {
            sum = sum + i; 
        }
    }
    return sum;
    }
console.log(sumOfodd(12))
console.log(sumOfodd(13))
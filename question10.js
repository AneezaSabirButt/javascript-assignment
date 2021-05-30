// function primeNumber(n) {
//     if (n>1) {
//         for (let i = 2; i <= n; i++) {
//            if (n%i==0) {
//             console.log(n + ' ' + 'is not a prime number');
//             break
//             }
//             else {
//             console.log(n + ' ' + 'is a prime number');
//             break
//             } 
//         }
//     }
// }
// primeNumber(9)
// primeNumber(5)

// for (let i = 2; i <= num / 2; i++) {
//     if (n % i == 0)

function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
          return false;
        }
      }
      return true;
    }
console.log(isPrime(9))
console.log(isPrime(52))
console.log(isPrime(3))


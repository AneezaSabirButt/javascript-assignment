// factorial_of_a_number
function factorial(n) {
    if ((n === 0) || (n === 1)) {
        console.log(1); 
    }else {
        let fact = 1
        for (i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log(fact);
    }
}

factorial(4)
factorial(1)
factorial(6)
factorial(2)
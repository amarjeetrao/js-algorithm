//Given a natural integer number, check whether it is prime number or not (divisible only by itself and 1)

//Time - O(sqrt(n)) where n - length of given array

// 1. Iterative Approach
function isPrime(num) {
	if (num < 2) return false;

	for (let i = 2; i < Math.sqrt(num); i++) {
		//divisible by a number smaller than itself
		if (n % i == 0) {
			return false
		}
	}

	return true
}

//sample test
console.log(isPrime(4));

// 2. Recursive Approach
function isPrime(num, i = 2) {
	//pre check for less than 2
	if (num < 2) return false

	//base case for exit (reached the number hence its a prime)
	if (num == i) return true

	//fail case
	if (num % i == 0) return false
	return isPrime(num, ++i)
}

//sample test
console.log(isPrime(7));

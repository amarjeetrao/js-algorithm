//Given a positive integer n and the task is to find the factorial of that number
//Input : 4
//Output : 24

//Time - O(n) where n - length of given array

// 1. Iterative Approach
function factorial(num) {
	let factorial = num;
	while (num > 2) {
		factorial = factorial * --num
	}
	return factorial;
}

//sample test
console.log(factorial(4))


// 2. Recursive Approach
function factorial(num) {
	if (num < 2) return num;
	return num * factorial(num-1)
}

//sample test
console.log(factorial(5));
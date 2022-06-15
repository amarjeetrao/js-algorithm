//Given a positive integer number, check whether it is power of two or not
//(eg. 2^8) where 8 is the power of 2

//Time - O(log(n)) where n - length of given array

// 1. Iterative Approach
function powerOfTwo(num) {
	if (num == 0) return false;

	while (num > 1) {
		if (num % 2 !== 0) {
			return false;
		}
		num = num / 2;
	}

	return true;
}

//sample test
console.log(powerOfTwo(15));

// 2. Recursive Approach
function powerOfTwo(num) {
	if (num == 1) return true
	//fail case
	if (num == 0 || num % 2 !== 0) return false;
	return powerOfTwo(num / 2);
}

//sample test
console.log(powerOfTwo(16));

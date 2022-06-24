//Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum.
// using Kadane’s algorithm - Dynamic Programming

//Time - O(n)
//Space - O(1)

function maxSubarraySum(arr) {
	let maxSum = 0;
	let tempMax = 0;

	for (let i = 0; i < arr.length; i++) {
		tempMax = tempMax + arr[i];
		if (arr[i] > tempMax) tempMax = arr[i];
		maxSum = Math.max(tempMax, maxSum);
	}

	return maxSum;
}

//sample test
console.log(maxSubarraySum([-3, 0, 1, 2, -3, 4, 3]));

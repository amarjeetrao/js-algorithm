//Given a sorted array of integers find all the pair where sum of 2 elements is 0
//Input : [-3,-2,-1, 0, 2, 3, 5, 6]
//Output : [[-3, 3], [-2, 2]]

//Time - O(n) where n - length of given array

function sumZero(arr) {
	let left = 0;
	let right = arr.length - 1;
	let result = [];

	//avoid the iteration if the first element it self is a +ve value
	if (arr.length && arr[0] >= 0) {
		return result;
	}

	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum == 0) {
			result.push([arr[left], arr[right]]);
		}
		if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}

	return result;
}

//sample test
console.log(sumZero([-3, -1, 0, 1, 2, 4, 3]));

//Given array of integers, find the needed number index or -1 if not exist in array
// time - O(log(n)) where n is length of string
// space - O(1)

// 1. Iterative Approach
function binarySearch(arr, search) {
	// add whatever parameters you deem necessary - good luck!
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		//mid should be inside loop to calculate next mid
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] == search) {
			return mid;
		}

		if (arr[mid] < search) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}

//Sample Test
console.log(binarySearch([3, 4, 5, 8, 9, 10, 14, 54, 66], 54));

// 2. Recursive Approach
function binarySearch(arr, search, left = 0, right) {
	let mid = Math.floor((left + right) / 2);

	if (left <= right && mid > 0) {
		if (arr[mid] == search) {
			return mid;
		}
		if (arr[mid] < search) {
			return binarySearch(arr, search, (left = mid + 1), right);
		} else {
			return binarySearch(arr, search, left, (right = mid - 1));
		}
	}
	return -1;
}

//Sample Test
let arr = [3, 4, 5, 8, 9, 10, 14, 54, 66];
console.log(binarySearch(arr, 54, 0, arr.length - 1));

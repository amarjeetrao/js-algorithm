function binarySearch(arr, search) {
	// add whatever parameters you deem necessary - good luck!
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		//mid should be inside loop to calculate next mid
		let mid = Math.floor(left + right / 2);
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
binarySearch([3, 4, 5, 8, 9, 10, 14, 54, 66], 14);

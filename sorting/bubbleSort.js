//Given an unsorted array of integer, sort the array
// Time - O(n2)
// Space - O(1)

//1. Compare every element either sorted or not
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

//Sample Test
console.log(
	bubbleSort([4, 5, 62, 2, 3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

//2. Compare only unsorted element
function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		//avoid unnecessary comparisons
		let noSwapped = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[i]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			} else {
				noSwapped = false;
			}
		}
		if (noSwapped) {
			break;
		}
	}
	return arr;
}

//Sample Test
console.log(
	bubbleSort([4, 5, 62, 2, 3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

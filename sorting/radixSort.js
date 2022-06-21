//Given an unsorted array of integer, sort the array using radix sort
// radix Sort : sort numbers only - digit by digit sort starting from least significant digit to most significant digit
// Time - O(n2)
// Space - O(n)

function radixSort(arr) {
	//get maximum length of digit
	let maxDigitLength = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigitLength = Math.max(maxDigitLength, digitLength(arr[i]));
	}

	for (let k = 0; k < maxDigitLength; k++) {
		let bucket = Array.from({length: 10}, () => []);
		for (let i = 0; i < arr.length; i++) {
			let digitAtPosition = getPositionDigit(arr[i], k);
			bucket[digitAtPosition].push(arr[i]);
		}
		arr = [].concat(...bucket);
		console.log(arr)
	}
	return arr;
}

function getPositionDigit(num, position) {
	return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitLength(num) {
	return ('' + Math.abs(num)).length;
}

//Sample Test
console.log(
	radixSort([4, 5, 62, 2, -3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

//Given an unsorted array of integer, sort the array using quick sort
// quick Sort : pick a pivot element and sort arr acording to it (put everything that is less than pivot and put everything on the right that is bigger)
// Time - O(log(n))
// Space - O(n)

function quickSort(arr, first = 0, last = arr.length - 1) {
	if (first < last) {
		let pivotIndex = findPivot(arr, first)
		//go left
		quickSort(arr, first, pivotIndex - 1)
		//go right
		quickSort(arr, pivotIndex + 1, last)
	}
	return arr
}

function findPivot(arr, first) {
	//initial pivot
	let pivot = arr[first]
	let pivotIndex = first

	for (let i = first + 1; i < arr.length; i++) {
		//move items less than pivot to adjusting to it
		if (arr[i] < pivot) {
			pivotIndex++
			[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
		}
	}

	[arr[first], arr[pivotIndex]] = [arr[pivotIndex], arr[first]]
	return pivotIndex
}

//Sample Test
console.log(
	quickSort([4, 5, 62, 2, -3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

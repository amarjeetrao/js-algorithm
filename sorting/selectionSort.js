//Given an unsorted array of integer, sort the array using selection sort
// Selection Sort : selecting the minimum value and putting in front sorted array
// Time - O(n2)
// Space - O(1)

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		//for checking if current value is lowest
		let minIndex = i;

		for (let j = i + 1; j < arr.length; j++) {
			//finding the most lowest in remaining array
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		//found the new minimum value
		if (minIndex != i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}

	return arr;
}

//Sample Test
console.log(
	selectionSort([
		4, 5, 62, 2, 3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5,
	])
);

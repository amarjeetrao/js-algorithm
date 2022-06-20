//Given an unsorted array of integer, sort the array using Insertion sort
// Insertion Sort : assuming the first element is sorted, we iterate over array from 2nd index and compare with first element and insert according to make it sort.
// Time - O(n2)
// Space - O(1)

function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		//the next element
		let j = i + 1;

		//iterate over the pre sorted part
		while (j > -1 && arr[j] < arr[j - 1]) {
			//current loop value is greater then the new element e.i. we will insert new elemnt and keep it comparing with other element of sorted part
			[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			j--;
		}
	}
	return arr;
}

//Sample Test
console.log(
	insertionSort([
		4, 5, 62, 2, -3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5,
	])
);

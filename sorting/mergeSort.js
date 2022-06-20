//Given an unsorted array of integer, sort the array using merge sort
// merge Sort : divide the input array in smaller arrays until 1 element present on smaller arrays then merge them in individually in sorted order
// Time - O(log(n))
// Space - O(n)

function mergeSort(arr) {
	//until array broken to length of 1 element
	if (arr.length <= 1) return arr;
	//get the mid part for dividing big array
	let mid = Math.floor(arr.length / 2);
	//get the left side of the sorted array after merging smallest unit
	let left = mergeSort(arr.slice(0, mid));
	//get the right side of the sorted array after merging smallest unit
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

function merge(arr1, arr2) {
	let result = [];
	let i = 0; //arr1 array counter
	let j = 0; //arr2 array counter

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
}

//Sample Test
console.log(
	mergeSort([4, 5, 62, 2, -3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

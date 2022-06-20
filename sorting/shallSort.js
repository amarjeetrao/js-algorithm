//Given an unsorted array of integer, sort the array using Shall sort
// Shall Sort : perform insertion sort on gapped array elements until gap is 0.
// Time - O(n2)
// Space - O(1)

function shallSort(arr) {
	let gap = Math.floor(arr.length / 2)

	while (gap > 0) {

		for (let i = gap; i < arr.length; i++) {

			let j = i;
			//iterate over the pre sorted part
			while (j > -1 && arr[j] < arr[j - gap]) {
				//current loop value is greater then the new element e.i. we will insert new elemnt and keep it comparing with other element of sorted part
				[arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
				j=-gap;
			}
		}
		gap = Math.floor(gap / 2)
	}

	return arr;
}

//Sample Test
console.log(
	shallSort([4, 5, 62, 2, -3, 4, 7, 9, 67, 4, 3, 3, 32, 545, 45, 64, 34, 5])
);

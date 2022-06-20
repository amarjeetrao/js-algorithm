//given a sorted array count the unique values in the array; consider -ve values as different value of its positive one
//Input : [-3,-2,-2,-1, 0, 2]
//Output : 5

//Time - O(n) where n is length of array

function countUnique(arr) {
	let count = 0;
	let i = 0;
	let j = i + 1;

	while (j <= arr.length) {
		if (arr[i] != arr[j]) {
			//move i to different number index
			i = j;
			count++;
		}
		j++;
	}

	return count;
}

// Sample Test
console.log(countUnique([1, 1, 1, 1, 2]));

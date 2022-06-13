
//Given array of integers, find the needed number index or -1 if not exist in array
// time - O(n) where n is length of string
// space - O(1)

// 1. Iterative Approach
function linearSearch(arr, search) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == search) {
			return i
		}
	}
	return -1
}

//Sample Test
linearSearch([29, 22, 28, 11, 23, 34, 10, 9, 28, 2, 1, 5, 14, 18, 19, 21], 14)


// 1. Recursive Approach
function linearSearch(arr, search) {
	if (arr.length < 1) return -1;
	if (arr[arr.length - 1] == search) return arr.length - 1;
	arr.pop();
	return linearSearch(arr.splice(arr), search)
}

//Sample Test
linearSearch([29,22,28,11,23,34,10,9,28,2,1,5,14,18,19,21], 14)
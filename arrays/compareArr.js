//write a function that takes 2 array of integer and check if every element of 1st array is meeting the condition with 2nd array element.
//condition : every 1st array element has square keyue in 2nd array (regardless of order)

//Time - O(n) where n is length of 1st array

function compareArr(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false
	}

	let hashmap1 = {}
	let hashmap2 = {}

	//store occurrence of each value on both arrays
	for (const index in arr1) {
		hashmap1[arr1[index]] = hashmap1[arr1[index]] ? ++hashmap1[arr1[index]] : 1
		hashmap2[arr2[index]] = hashmap2[arr2[index]] ? ++hashmap2[arr2[index]] : 1
	}

	//then compare the condition for arr1Elem == (square of arr2Elem)
	for (const key in hashmap1) {
		if (!hashmap2.hasOwnProperty(key ** 2)) return false
		if (hashmap2[key ** 2] !== hashmap1[key]) return false;
	}
	return true
}

//sample test
console.log(compareArr([1,2,4,3], [1,9,4,9]));
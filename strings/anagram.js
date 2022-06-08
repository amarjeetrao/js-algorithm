function isAnagram(str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	if (str1.length !== str2.length) {
		return false;
	}

	let hashmap1 = {};
	let hashmap2 = {};

	//store occurrence of each value on both arrays
	for (const index in str1) {
		hashmap1[str1[index]] = hashmap1[str1[index]]
			? ++hashmap1[str1[index]]
			: 1;
		hashmap2[str2[index]] = hashmap2[str2[index]]
			? ++hashmap2[str2[index]]
			: 1;
	}

	//then compare the condition for arr1Elem == (square of arr2Elem)
	for (const key in hashmap1) {
		if (!hashmap2.hasOwnProperty(key)) return false;
		if (hashmap2[key] !== hashmap1[key]) return false;
	}
	return true;
}

//sample test
console.log(isAnagram('aaz', 'azz'));
console.log(isAnagram('anagram', 'nagaram'));

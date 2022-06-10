//Given an array of integer and subArrays flatten the array to 1 level
//Input : [1, [2, [3, 4], [[5]]]]
//Output : [1,2,3,4,5]

//Time - O(n) where n - length of given array

function flatten(arr) {
	//final array container
	let result = [];

	//loop over the input array - O(n)
	for (let i = 0; i < arr.length; i++) {
		//if the element is array
		if (Array.isArray(arr[i])) {
			//call the function again to iterate over the deeper sub array
			let temp = flatten(arr[i]);
			result = [...result, ...temp];
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}

//sample test
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

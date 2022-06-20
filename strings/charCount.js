//write a function which takes in a string and return counts (alphanumerics only) of each character in the string
//Input : amarjeet
//Output : {a:2,m:1:r:1,j:1,e:2,t:1}

//Time Complexity: O(n), where n is the length of our string
//Auxiliary Space – O(1).

function charCount(str) {
	const count = {};
	for (let char of str) {
		if (/[\w|\d]/.test(char)) {
			char = char.toLowerCase();
			count[char] = count[char] ? ++count[char] : 1;
		}
	}
	return count;
}

//sample test
console.log(charCount('amarjeet'));

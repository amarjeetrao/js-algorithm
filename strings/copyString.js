//Given two strings, copy one string to other

// 1. Iterative Approach
// time - O(n) where n is length of string
// space - O(1)
const S1 = 'Amarjeet'

function copyString(str) {
	for (let i = 0; i < str.length; i++) {
		copy += str[i]
	}
	return copy
}
//sample test
let myStr = copyString(S1);



// 2. Reduce Method
let s2 = Array.from(S1).reduce((acc, char) => acc += char, '')



//3. Recursion Method
function copyString(s1, s3 = '', index = 0) {

	//base case - when reached to end of the original string
	if (index == s1.length) {
		return s3
	}
	s3 += s1[index]
	return copyString(s1, s3, index + 1)
}
//sample test
let s3 = copyString(S1)

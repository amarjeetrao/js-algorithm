//Given a string of length n check for palindrome string
//Input : awesome, tacocat
//Output : false, true

//Time - O(n) where n - length of given string

function isPalindrome(str) {
	//all string character is same from first and last position of string
	if (str.length === 0) return true;

	let first = str[0];
	let last = str[str.length - 1];
	//check if character is same e.i. it could be palindrome keep checking
	if (last === first) return isPalindrome(str.slice(1, -1));
	return false;
}

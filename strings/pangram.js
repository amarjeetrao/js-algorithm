//Given a string check if it is Pangram or not. A pangram is a sentence containing every letter in the English Alphabet.
//Examples : The quick brown fox jumps over the lazy dog ” is a Pangram [Contains all the characters from ‘a’ to ‘z’]
//“The quick brown fox jumps over the dog” is not a Pangram [Doesn’t contain all the characters from ‘a’ to ‘z’, as ‘l’, ‘z’, ‘y’ are missing]

//Time Complexity: O(n), where n is the length of our string
//Auxiliary Space – O(1).

function isPangram(str) {
	//to keep check of alphabet counter as if count == 26 that means all character where found
	let count = 0;
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	for (let i = 0; i < str.length; i++) {
		//found the character
		let char = str[i].toLowerCase()
		let indexOfChar = alphabet.indexOf(char);
		if (indexOfChar > -1) {
			delete alphabet[indexOfChar];
			count++;
		}
	}

	if (count == 26) {
		return true
	}
	return false
}
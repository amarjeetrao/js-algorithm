//Given a string, find all characters that are missing from the string, i.e., the characters that can make the string a Pangram.
//Input : welcome to geeksforgeeks
//Output : abdhijnpquvxyz

//Time Complexity: O(1), where n is the length of our string
//Auxiliary Space – O(1).

function missCharsToMakePangram(str) {
	let missChar = ''
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	for (let i = 0; i < alphabet.length; i++) {
		//found the character
		let indexOfChar = str.indexOf(alphabet[i])
		if (indexOfChar == -1) {
			missChar+=alphabet[i]
			delete alphabet[i]
		}
	}

	return missChar
}

//sample test
console.log(missCharsToMakePangram('welcome to geeksforgeeks'));
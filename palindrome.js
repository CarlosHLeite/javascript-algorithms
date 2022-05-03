function isPalindrome(string){
	string = string.toLowerCase()
	const characterArr = string.split("");
	const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	const lettersArr = [];
	characterArr.forEach( char => {
		if(validCharacters.indexOf(char) > -1){
			lettersArr.push(char)
		}
	})

	if(lettersArr.join("") === lettersArr.reverse().join("")){
		return true
	} else {
		return false
	}
	
	
}

console.log(isPalindrome("Madam I'm Adam"))

function reversedWord(word) {
	const wordArr = word.split(" ");
	
	const newWordArr = []
	
	wordArr.forEach(word => {
		let newReversed = "";
		for( let i = word.length - 1; i >= 0; i--){
			newReversed+= word[i];
		}
		newWordArr.push(newReversed)	
	})
	return newWordArr.join(" ")
	
}


console.log(reversedWord("Carlos Henrique de Oliveira Leite"))
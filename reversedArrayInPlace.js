function reversedArrayInPlace(arr) {
	for( let i = 0; i < arr.length / 2; i++){
		let tempArr = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempArr;
	}

	return arr;
}

console.log(reversedArrayInPlace(["carlos", "Henrique","oliveira", "leite"]))








function reverse(str) {
	if(!str || str.length < 2 || typeof str !== 'string')
	{
		return 'Something Wrong';
	}

	const backWards = [];
	const totalItems = str.length - 1;

	for(let i = totalItems; i >= 0; i--){
		backWards.push(str[i]);
	}

	return backWards.join("");
	
}

console.log(reverse("Carlos Henrique Leite"))
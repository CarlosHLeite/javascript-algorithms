function reversedArrayInPlace(arr) {
	for( let i = 0; i < arr.length / 2; i++){
		let tempArr = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempArr;
	}

	return arr;
}

console.log(reversedArrayInPlace(["carlos", "Henrique","oliveira", "leite"]))
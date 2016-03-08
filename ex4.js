function palindrome(input) {
	var length = input.length
	for(var i = 0; i < Math.floor(length/2) ; i++) {
		if(input[i] !== input[length - 1 - i]) 
			return false
	}
	return true
}

console.log(palindrome("616"))

function product(a,b) {
	var palinArray = []
	for( var a = 999; a >= 100; a -- ){
		for(var b = 999; b >= 100; b--) {
			var result = a * b
			console.log(result)
			var str_result = result.toString()
			//console.log(typeof str_result)
			if(palindrome(str_result) == true) {
				palinArray.push(result)
			}	
		}
	}
	console.log(palinArray)	
	var largest = Math.max.apply(Math, palinArray)
	console.log("The largest palindrome product is " + largest)
}

product()

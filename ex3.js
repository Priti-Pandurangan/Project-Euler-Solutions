function isPrime(value) {
	for(var i = 2; i < value; i++) {
		if(value % i == 0) {
			return false
		}
	}return true
}
//console.log(isPrime(13))

function primeFactorize(input) {
	var prime_factor_array = []
	while(input % 2 == 0) {
		console.log(2)
		prime_factor_array.push(2)
		input = input/2
	} 
	for(var i = 3 ; i < Math.sqrt(input); i = i + 2) {
		while(input % i == 0) {
			console.log(i)
			prime_factor_array.push(i)
			input = input / i
		} 
	} 
	if((isPrime(input) == true) && (input > 2)) {
		console.log(input)
		prime_factor_array.push(input)
		
	}
	//console.log(prime_factor_array)
		var largest = Math.max.apply(Math, prime_factor_array)
		console.log("The largest prime factor is " + largest)
}

primeFactorize(600851475143);



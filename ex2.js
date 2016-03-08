function evenFibonacci(limit) {
	var temp
	var sum = 0
	var a = 0
	var b = 1
	var fib_array = []
	while(b < limit) {
		temp = a
		a = b
		b = b + temp
		fib_array.push(b)
		if((b % 2 )== 0) {
			sum = sum + b
		}
	}
	console.log(fib_array)
	return sum
}

console.log("The sum of even values is " + evenFibonacci(4e6))

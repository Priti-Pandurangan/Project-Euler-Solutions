/*function findPrime(index) {
    var i, prime_array = [2, 3], n = 5;

    function isPrime(n) {
        var i = 1
        var a = prime_array[i]
        console.log(a)
        var limit = Math.round(Math.sqrt(n));
        console.log(limit)
        while (a <= limit) {
            if (n % a === 0) {
                return false;
            }
            i += 1;
            a = prime_array[i];
        }
        return true;
    }

    for (i = 2; i <= index; i ++) {
        while (isPrime(n) == false) {
            n += 2;
        }
        prime_array.push(n);
        console.log(prime_array)
        n += 2;
    }
    return prime_array[index - 1];
}

console.log(findPrime(10));
*/

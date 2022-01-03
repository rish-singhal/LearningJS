function power(base, exponent, mod) {
    if (exponent == 0) {
        return 1;
    }
    let result = power(base, Math.floor(exponent/2), mod);
    result = (result * result) % mod;
    
    if (exponent % 2 == 1) {
        result = (result * base) % mod;
    }

    return result;
}

console.log(power(2, 3, 10));


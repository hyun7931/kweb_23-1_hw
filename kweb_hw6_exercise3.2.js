function getDivisors(x) {
    const divisors = [];
    const sqrtX = Math.floor(Math.sqrt(x));
  
    for (let i = 1; i <= sqrtX; i++) {
      if (x % i === 0) {
        divisors.push(i);
        if (i !== x / i) {
          divisors.push(x / i);
        }
      }
    }
  
    divisors.sort((a, b) => a - b);
    return divisors;
  }
  
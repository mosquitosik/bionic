function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}


function check (a) {
  for (var i = 0; i <= a; i++) {
    if (isPrime(i)) console.log(i);
  }
}

check (17);

// ! Задание 2

function isPrime(n) {
    if (n > 1000) throw "wrong data"
    if (n < 2) {
      throw 'Число должно быть больше 1';
    } else if (n === 2) {
      return true
    }
  
    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
      if (n % i === 0) {
        return false
      }
      i +=1;
    }
    
    return true
  }
  console.log(isPrime(0))
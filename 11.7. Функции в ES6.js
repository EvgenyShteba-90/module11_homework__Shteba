// ! Задание 5

function pow(x, n) {
    let q = 1;
    for (let i = 0; i < n; i++) {
        q = q * x;
    }
    return q;
}

console.log(pow(2, 7))
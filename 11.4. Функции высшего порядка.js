// ! Задание 3

function func(a) {
    return function (t) {
        return a + t;
    }
}
let sum = func(3)
console.log(sum(4))
console.log(sum(10))


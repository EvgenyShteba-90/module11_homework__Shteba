// ! Задание 4

function count(a, b) {
    let cur = a;
    let tmp = setInterval(function () {
        console.log(cur)
        if (cur == b) clearInterval(tmp)
        cur++;
    }, 1000)
}
count(5, 15)
// ! Задание 1

let a = [3, 0, "str", null, "", 4, 6, 8, 7];
function getOddEvenNumberInArray(arr) {
    let numEven = 0;
    let numOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(arr[i])
            continue
        }
        let isNumber = typeof (arr[i]) == "number" && arr[i] == arr[i];
        if (isNumber) {
            if (arr[i] % 2 == 0) {
                numEven += 1;
            } else {
                numOdd += 1;
            }
        }
    }
    console.log(numEven);
    console.log(numOdd);
}

getOddEvenNumberInArray(a);

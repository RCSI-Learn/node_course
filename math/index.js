export function add (x, y) {
    return x + y
}
export function substract (x, y) {
    return x - y
}
export function multiply (x, y) {
    return x * y
}
export function divide (x, y) {
    return x / y
}

// module.exports = {
//     add,
//     substract,
//     multiply,
//     divide
// }

// console.log(add(10, 20));
// console.log(substract(10, 20));
// console.log(multiply(10, 20));
// console.log(divide(10, 20));

//esto por el modules de Ecmascript
export default {
    add,
    substract,
    multiply,
    divide
}
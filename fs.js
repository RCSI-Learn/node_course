const fs = require('fs')

// const first = fs.readFileSync('./data/first.txt', 'utf-8')
// const second = fs.readFileSync('./data/second.txt')
// console.log(first);
// console.log(second.toString());

// fs.writeFileSync('./data/third.txt', 'tercer archivo.')
// const third = fs.readFileSync('./data/third.txt', 'utf-8')
// console.log(third);

// for(i=0; i<5; i++){
//     fs.writeFileSync('./data/fourth.txt', 'Linea ' + i, {
//         flag: 'a'
//     })
// }

// const fourth = fs.readFileSync('./data/fourth.txt', 'utf-8')
// console.log(fourth);
const first = fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})

const third = fs.readFile('./data/third.txt', 'utf-8', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
})
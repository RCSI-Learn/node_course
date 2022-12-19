//const { readFile } = require('fs');
//const { reject } = require('lodash');

//promises
// const getText = (pathFile) => {
//     return new Promise((resolve, reject) => {
//         readFile(pathFile, 'utf-8', (error, data) => {
//             if (error) reject(error)
//             else resolve(data)
//         });
//     })
// }

//promises
// getText('./data/fourth.txt')
// .then((result) => console.log(result))
// .then(() => getText('./data/first.txt'))
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

// async function read() {
//     try {
//         const result = await getText('./data/first.txt')
//         console.log(result)
//         const result2 = await getText('./data/second.txt')
//         console.log(result2)
//         const result3 = await getText('./data/third.txt')
//         console.log(result3)
//         const result4 = await getText('./data/fourth.txt')
//         console.log(result4)
//     } catch (error) {
//         console.log(error)
//     }
// }

//promisify
// const { promisify } = require('util')
// const readFilePromise = promisify(readFile)
// //async
// async function read() {
//     try {
//         const result = await readFilePromise('./data/first.txt', 'utf-8')
//         console.log(result)
//         const result2 = await readFilePromise('./data/second.txt', 'utf-8')
//         console.log(result2)
//         const result3 = await readFilePromise('./data/third.txt', 'utf-8')
//         console.log(result3)
//         const result4 = await readFilePromise('./data/fourth.txt', 'utf-8')
//         console.log(result4)
//     } catch (error) {
//         console.log(error)
//     }
// }

//fs/promisify
const { readFile } = require('fs/promises');
//async
async function read() {
    try {
        const result = await readFile('./data/first.txt', 'utf-8')
        console.log(result)
        const result2 = await readFile('./data/second.txt', 'utf-8')
        console.log(result2)
        const result3 = await readFile('./data/third.txt', 'utf-8')
        console.log(result3)
        const result4 = await readFile('./data/fourth.txt', 'utf-8')
        console.log(result4)
    } catch (error) {
        console.log(error)
    }
}

read()
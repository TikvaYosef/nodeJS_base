
// console.log("hello nodeJs");


// for (let i = 0; i < 15; i++) {
//     console.log(i)

// }


// let array = ["tikva", "keren", "yafit", "eden", "yosef"]
// console.log(array)


// let array = []
// for (let i = 0; i < 17; i++) {
//     let randomnum = Math.floor(Math.random()*10)
//     array.push(randomnum)
//     if (array[i] % 2 == 0) {
//         console.log(array[i])
//     }
// }


// const fs = require('fs')
// // fs.writeFile('./myFile.txt',"test",()=>{})
// fs.readFile('./myFile.txt',(err,result)=>{
//     if(err)throw err
//         console.log(result.toString());


// })

// import fs from 'fs';
const fs = require('fs');

// let array = [];
// for (let i = 0; i <= 14; i++) {
//     array.push(i)
//     fs.writeFile('./numbers.txt', `${array}`, () => { })
// }

// fs.readFile('./numbers.txt', (err, result) => {
//     if (err) throw err;
//     console.log(result.toString());
// })

// let arrayofnames = ["Aikva", "Aeren", "yosef", "yakov"];
// fs.writeFile('./names.txt', `${arrayofnames}`, (err) => { 
// if err throw err
// });

// fs.readFile('./names.txt', (err, result) => {
//     if (err) throw err
//     let newarray = result.toString().split(",")
//     newarray.forEach(item => {
//         if (item[0].toLocaleUpperCase() == "A")
//             console.log(item)
//     })
// })

let randomnums = [];
// for (let i = 0; i < 13; i++) {
//     let random = Math.floor(Math.random() * 100)

//     if (random % 3 == 0) {
//         randomnums.push(random);
//         fs.writeFile("./randomNum.txt", `${randomnums}`, (err) => {
//             if (err) throw err
//         })
//     }
// }

fs.readFile("./randomNum.txt", (err, result) => {
    if (err) throw err;
    let newarray = result.toString().split(",")
    newarray.forEach(item => {
        if (item > 50) {
            console.log(item)
        }
    });
})


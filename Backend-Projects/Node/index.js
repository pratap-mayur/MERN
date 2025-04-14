// // function hello(){
// //     console.log("Hello World");
// // }
// // hello();

// const add2 =require("./add");
// const sum = add2(5,7);
// const sum2 = add2(8,9);


// console.log(sum);
// console.log(sum2);

// const os = require('os');
// const a = os.freemem();
// const b = os.totalmem();
// console.log(a,b);


const fs = require('fs');
// fs.readFile('file.txt', 'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

const file = fs.readFileSync('file.txt', "utf-8");
console.log(file);

fs.writeFile('text.txt',"Subscribe us ",(err)=>{
    if(err){
        console.log(err);
        return 
    }
    console.log('file written');
})
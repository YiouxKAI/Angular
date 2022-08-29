//擺脫惱人的字串串接符號
let price=10;
let amount=5;

//let total="Total:" +price*amount+"元";


let total=`Total:${price*amount}元`;

console.log(total);
//以let來宣告，確保其區域性
//let 宣告，是區域變數
var a=5,b=0;
let x=2,y=0;

{
    var c=a+b;
    let z=x+y;
    console.log(c);
    console.log(z);
}

console.log(c);
console.log(z);
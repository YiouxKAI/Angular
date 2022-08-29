var a=1;

function b(){
    var c=2;
    console.log(a);  //輸出1
    console.log(c);  //輸出2
}

console.log(a);  //輸出1
b();
console.log(c);  //報錯 y is not defined
var a=1;

function b(){
    var c=2;
    console.log(a);  //輸出undefined
    console.log(c);  //輸出2
    var a=8;  //多寫一行
}

console.log(a);  //輸出1
b();
//console.log(c);  //報錯 y is not defined
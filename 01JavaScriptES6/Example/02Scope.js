//重新認識變數的Scope(作用域)
var x=2;

function cal(){
    var x=5,y=1
    console.log(x+y);  
}

cal();
console.log(x);  //輸出2
//ES6參數可給預設值
function add(a=8,b=5){
     console.log(a+b);
}

//函數的另一種表達方式
/* let add=function (a=8,b=5){
    console.log(a+b);
}
 */

add();
add(1);
add(1,2)
//for in 必須寫這樣,因為它必須由索引值來處理

let arr=[1,2,3,4,5];

for(let item in arr)
{
    console.log(item);
}
//////////////////
for(let key in arr)
{
    console.log(arr[key]);
}
///////////////////////////////
//我們再看一個for in 的例子
let obj={
    thing:"Apple",
    num:123
}

for(let item in obj){
    console.log(item);
    console.log(obj[item]);
}
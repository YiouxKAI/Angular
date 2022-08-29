let arr=[1,2,3,4,5];

/* 值 */
for(let key in arr)  
{
    console.log(arr[key]); 
}

/* 索引值 */
for(let item in arr)  
{
    console.log(item); 
}

/******************************/
let obj={
    thing:"Apple",
    num:123
}

for(let item in obj){
    console.log(item);
    console.log(obj[item]);
}
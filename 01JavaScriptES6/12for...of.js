//javascript的陣列可以混和存放 arr[string, number, boolean]
let arr=[1,2,3,4,5];

/* for in是讀索引值
for(let item in arr)  
{

}
*/

for(let item of arr)  
{
    console.log(item);
}
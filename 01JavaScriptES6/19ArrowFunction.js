let a=[1,2,3];


let b=a.map(function(i){ 
    return i+i
});

let d=a.map((i)=>{return i+i});

let c=a.map(i=>i+i);

console.log(b);
console.log(d);
console.log(c);
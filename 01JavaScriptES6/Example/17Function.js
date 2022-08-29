//ES5參數無法給預設值
function add(a,b){
  
    a=a||3, b=b||7;   //需要預設值時必須要用詭異的寫法

    console.log(a+b);
}

add();
add(1);
add(1,2)
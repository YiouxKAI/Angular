//若是再進去一層,this的指向會改變,sometihing會變undefined
/* let obj={
    something:'apple',
    showSomething(){
        //this的綁定指向問題
        setTimeout(function(){
            console.log(this.something);
        }, 1000);
       
    }
} 
*/

//使用箭頭函數解決此問題
let obj={
    something:'apple',
    showSomething(){
        
        setTimeout(()=>{
            console.log(this.something);
        }, 1000);
       
    }
}

obj.showSomething();
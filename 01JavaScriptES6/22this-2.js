let obj={
    something:"apple",
    showSomething(){
        //this的綁定指向問題
        setTimeout(()=>{
                    console.log(this.something);
        },1000)
    }
}

obj.showSomething();
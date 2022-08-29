//一般狀況this綁定對象沒問題
let obj={
    something:'apple',
    showSomething(){
        console.log(this.something);
    }
}

obj.showSomething();
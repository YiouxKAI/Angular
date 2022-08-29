//ES6的繼承
class Point{
    //建構子
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    //方法
    getTotal(){
        console.log(this.x+this.y);
    }
}

class Label extends Point{
    //建構子
    constructor(x,y,name){
        super(x,y); //要在建構子中以super()函數來初始化父類別,否則this沒有指向

        this.name=name
    }
    //方法
    getTotal(){
        super.getTotal(); //super即父類別
        console.log(this.name);
    }
}

//一樣可以用prototype
Point.prototype.printAll=function(){
    console.log(l.x+","+l.y);
}


//建立主程式來測試
let l=new Label(1,2,"Label1");

l.getTotal();

l.printAll();
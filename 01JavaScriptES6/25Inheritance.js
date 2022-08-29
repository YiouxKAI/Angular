class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getTotal(){
        console.log(this.x+this.y);
    }
}

class Label extends Point{

    constructor(x,y,name){
        super(x,y);

        this.name=name
    }
    getTotal(){
        super.getTotal();
        console.log(this.name);
    }
}


Point.prototype.printAll=function(){
    console.log(l.x+","+l.y);
}

let l=new Label(1,2,"Label1");

l.getTotal();

l.printAll();
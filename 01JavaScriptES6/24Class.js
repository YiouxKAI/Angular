class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getTotal(){
        console.log(this.x+this.y);
    }
}

let p=new Point(1,2);
p.x=12;
p.y=22;
p.getTotal();
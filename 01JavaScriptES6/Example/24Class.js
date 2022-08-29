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

//在建構時給值
let p=new Point(1,2);

//亦可另外給值
p.x=12;
p.y=22;

p.getTotal();
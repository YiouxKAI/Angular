interface Color{
    r:number;
    g:number;
    b:number;
    show():void;
}

class Red implements Color{
    r:number=255;
    g:number=0;
    b:number=0;

    show():void{
        console.log(`R:${this.r}, G:${this.g}, B:${this.b}`);
        
    }
}


class Green implements Color{
    r:number=0;
    g:number=255;
    b:number=0;

    show():void{
        console.log(`R:${this.r}, G:${this.g}, B:${this.b}`);
        
    }
}


class Blue implements Color{
    r:number=0;
    g:number=0;
    b:number=255;

    show():void{
        console.log(`R:${this.r}, G:${this.g}, B:${this.b}`);
        
    }
}


let red:Red=new Red();
red.show();


let blue:Blue=new Blue();
blue.show();

//多型(同名異式)

let myColor:Color;
myColor=new Red();
myColor.show();
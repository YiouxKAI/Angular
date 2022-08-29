let Point = function (x, y) {
    this.x = x;
    this.y = y;

    this.printAll = function () {
        console.log(this.x + "," + this.y);
    }

    //this.printAll=printAll;
}


/* function printAll(){
    console.log(this.x+","+this.y);
} */

let p = new Point(1, 2);
p.printAll();

Point.prototype.getTotal = function () {
    console.log(p.x + p.y);
}

p.getTotal();
/////////////////////////////////////////

let d = new Date();

Date.prototype.getNationalDate = function () {
    return (d.getFullYear() - 1911) + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日星期" +week(d.getDay());
}

let week = function (d) {
    switch (d) {
        case 0:
            return "日";
        case 1:
            return "一";
        case 2:
            return "二";
        case 3:
            return "三";
        case 4:
            return "四";
        case 5:
            return "五";
        case 6:
            return "六";
    }
}



console.log(d.getNationalDate());







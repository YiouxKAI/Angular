export class Person{
    // private Name:string;
    


    constructor(private Name:string){
        // this.Name=Name;
    }

    getName():void{
        console.log(this.Name);
        
    }
}

/* let person=new Person("Jack");
// person.Name="Jack"; //private的情況無法給值
// console.log(person.Name);//private的情況無法取值

person.getName(); */

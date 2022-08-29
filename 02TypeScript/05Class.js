"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    // private Name:string;
    function Person(Name) {
        this.Name = Name;
        // this.Name=Name;
    }
    Person.prototype.getName = function () {
        console.log(this.Name);
    };
    return Person;
}());
exports.Person = Person;
/* let person=new Person("Jack");
// person.Name="Jack"; //private的情況無法給值
// console.log(person.Name);//private的情況無法取值

person.getName(); */

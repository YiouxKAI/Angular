//Enum(列舉,枚舉)
var Thing;
(function (Thing) {
    Thing["A"] = "Apple";
    Thing["B"] = "Book";
    Thing["C"] = "Cat";
})(Thing || (Thing = {}));
var t;
t = Thing.A;
console.log(t);
////////////////////////////
var h = 1;
h = "Hello";
console.log(h);
function v() {
    console.log("Do Nothing!!");
}
v();

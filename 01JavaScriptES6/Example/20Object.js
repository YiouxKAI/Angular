let student = {
    name: "Jack",
    age: 25,
    scores: {
        chinese: 85,
        english: 95,
        math: 90
    },

    getTotalScore:function(){
        return this.scores.chinese+this.scores.english+this.scores.math;
    }

}

//取得屬性值的兩種寫法
console.log(student["name"]);
console.log(student.age);
console.log(student.scores.math);
console.log(student["scores"]["math"]);

//呼叫物件方法
console.log(student.getTotalScore());
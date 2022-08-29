let student={
    name:"Jack",
    age:25,
    Scores:{
        chinese:85,
        english:95,
        math:90
    },

    getTotalScore:function(){
        return this.Scores.chinese+this.Scores.english+this.Scores.math;
    }

}

console.log(student["name"]);
console.log(student.age);
console.log(student.Scores);
console.log(student.Scores.math);
console.log(student["Scores"]["math"]);

let totalScore=student.Scores.chinese+student.Scores.english+student.Scores.math;
console.log(totalScore);

console.log(student.getTotalScore());
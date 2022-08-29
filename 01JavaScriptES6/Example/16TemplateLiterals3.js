//當有HTML時你會愛上它
let header="Templage Literals";

let tags=["templage literals","javascript","es6"];


let html=`<h2>${header}</h2><ul>`;

for(let x of tags){
    html+=`<li>${x}</li>`
}

html+=`</ul>`;


console.log(html);
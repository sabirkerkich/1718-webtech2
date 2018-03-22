let popcorn = parseInt(prompt("vul een getal in voor popcorn", 5));
let hamburger = parseInt(prompt("vul een getal in voor hamburger", 5));
let donut = parseInt(prompt("vul een getal in voor donut", 5));


let input1 = document.getElementById("result1");
let input2 = document.getElementById("result2");
let input3 = document.getElementById("result3");
let userSolution = document.getElementById("result4");

input1.value = popcorn * 3;

input2.value = popcorn + hamburger + hamburger;

input3.value = donut * 4 + hamburger;


let correctSolution = hamburger + donut * popcorn;
console.log(correctSolution);

let checkButton = document.getElementById('check');


checkButton.addEventListener("click", function () {
    console.log(correctSolution);
    console.log(userSolution.value);
    if (correctSolution == userSolution.value) { alert("juist"); } else { alert('fout'); }
});



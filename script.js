const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const answer = document.querySelector("#answer");


clear.addEventListener("click", function(){
    answer.textContent = '';
});

number.forEach(function(button){

    button.addEventListener("click", function(){
        answer.textContent += button.textContent;

    });

});

operator.forEach(function(button){
    button.addEventListener("click", function(){
        answer.textContent += button.textContent;
    })
});

equal.addEventListener("click", function(){
    answer.textContent = eval(answer.textContent);
});
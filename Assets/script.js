var answer = document.querySelector('.start-button')
var answer = document.querySelector(".large-font word-blank")
var answer = document.querySelector(".correct")
var answer= document.querySelector(".not correct")
var startquiz = document.querySelector(".large-font start-quiz")



function startquiz() {
    var words = ["javascript", "HTML", "Cascading"]
    var timeLeft= 50;

    var timeInterval = setInterval(function(){

        if (timeLeft > 1) {
            timer.textContent + timeLeft;
            timeLeft--;

        }

    }, 1000);
}



const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));

var currectQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
    question: "What does JSON stand for?",
    choice1: "Jan Script Open Note",
    choice2: "Jinx Script Oval Nav",
    choice3: "Java Script Object Notation",
    choice4: "Java Script Objection Notation",
    answer: 1
    },

    questions = [
        {
        question: "What does JSON stand for?",
        choice1: "Jan Script Open Note",
        choice2: "Jinx Script Oval Nav",
        choice3: "Java Script Object Notation",
        choice4: "Java Script Objection Notation",
        answer: 1
        },

        questions = [
            {
            question: "What does JSON stand for?",
            choice1: "Jan Script Open Note",
            choice2: "Jinx Script Oval Nav",
            choice3: "Java Script Object Notation",
            choice4: "Java Script Objection Notation",
            answer: 1
            },

            questions = [
                {
                question: "What does JSON stand for?",
                choice1: "Jan Script Open Note",
                choice2: "Jinx Script Oval Nav",
                choice3: "Java Script Object Notation",
                choice4: "Java Script Objection Notation",
                answer: 1
                }];
                questions = [
                    {
                    question: "What does JSON stand for?",
                    choice1: "Jan Script Open Note",
                    choice2: "Jinx Script Oval Nav",
                    choice3: "Java Script Object Notation",
                    choice4: "Java Script Objection Notation",
                    answer: 1
                    }];
    

const max_questions = 3;
const correct_bonus = 10;

startQuiz = () => {
    questionCounter = 0;
    availableQuestions = [... questions];
    console.log(availableQuestions);
    getNewQuestion();

}
getNewQuestion = () => {
    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currectQuestion = availableQuestions[questionIndex];
    question.innerText = currectQuestion.question;

    choices.forEach( choices => {
        const number = choice.dataset['number'];
        choice.innerText = currectQuestion["choice" + number];
    });
}







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


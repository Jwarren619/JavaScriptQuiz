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
    }];

    questions = [
        {
        question: "What is the meaning of HREF?",
        choice1: "Hashtag",
        choice2: "Hyperlink",
        choice3: "J",
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
    

const MAX_QUESTIONS = 3;
const CORRECT_BONUS = 10;

startQuiz = () => {
    questionCounter = 0;
    availableQuestions = [... questions];
    console.log(availableQuestions);
    getNewQuestion();

}
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > max_questions) {
    return window.location.assign("./end.html");
  }

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currectQuestion = availableQuestions[questionIndex];
    question.innerText = currectQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currectQuestion["choice" + number];
    })


availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        
        
        const classToApply = 
        selectedAnswer == currectQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "CORRECT_BONUS");

       selectedChoice.parentElements.classList.add(classToApply);
        setTimeout(() => {
       selectedChoice.parentElements.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
});

});

 incrementScore = num => {
    score =+ num;
    scoreText.innerText = score;
 }

startquiz();

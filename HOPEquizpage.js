const questions = [
    {
        question: "There are three basic energy systems, EXCEPT one",
        answers: [
            {text: "Anaerobic a-lactic System", correct:false},
            {text: "Anaerobic lactic System", correct:false},
            {text: "Aerobic System", correct:false},
            {text: "Adrenaline System", correct:true},
        ] 
    },
    {
        question: "It is an energy system that requires a high amount of short duration:",
        answers: [
            {text: "Anaerobic a-lactic System", correct:true},
            {text: "Anaerobic lactic System", correct:false},
            {text: "Aerobic lactic System", correct:false},
            {text: "Adrenaline System", correct:false},
        ] 
    },
    {
        question: "The ATP-CP stands for?",
        answers: [
            {text: "Adenosine Triphosphate-Creatine Phosphate", correct:true},
            {text: "Adrenaline Triphosphate-Creatine Phosphate", correct:false},
            {text: "Aerobic Triphosphate-Creatine Phosphate", correct:false},
            {text: "None of the above", correct:false},
        ] 
    },
    {
        question: "Glycotic system is also known as:",
        answers: [
            {text: "ATP-CP", correct:false},
            {text: "Anaerobic lactic system", correct:true},
            {text: "Adrenaline system", correct:false},
            {text: "Aerobic system", correct:false},
        ] 
    },
    {
        question: "What kind of energy system is being used when doing slow but powerful movements in a dance?",
        answers: [
            {text: "ATP-CP", correct:false},
            {text: "Anaerobic lactic System", correct:false},
            {text: "Aerobic System", correct:true},
            {text: "It is the energy system that uses oxygen", correct:false},
        ] 
    },
    {
        question: "It is the energy system that uses oxygen.",
        answers: [
            {text: "Lactic Acid System", correct:false},
            {text: "Aerobic System", correct:true},
            {text: "ATP-CP", correct:false},
            {text: "Glycotic system", correct:false},
        ]
    },
    {
        question: "It is an energy system that is considered to be the immediate system.",
        answers: [
            { text: "ATP-CP", correct: true },
            { text: "Glycolytic System", correct: false },
            { text: "Lactic acid system", correct: false },
            { text: "Aerobic system", correct: false },
        ]
    },
    {
        question: "Mostly, what kind of energy system is being used in dancing?",
        answers: [
            { text: "ATP-CP", correct: false },
            { text: "Lactic Acid System", correct: false },
            { text: "Aerobic system", correct: true },
            { text: "Glycolytic system", correct: false },
        ]
    },
    {
        question: "It is the primary source of ATP during aerobic activities.",
        answers: [
            { text: "Lactic Acid System", correct: false },
            { text: "ATP-CP", correct: false },
            { text: "Oxidative system", correct: true },
            { text: "Glycolytic system", correct: false },
        ]
    },
    {
        question: "The body stores ATP in muscle in a form of _____________.",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Water", correct: false },
            { text: "Glycogen", correct: true },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "It plays a vital role for self-expression and has been part of rituals and religous gatherings.",
        answers: [
            { text: "Aerobic Activity", correct: false },
            { text: "Dance", correct: true },
            { text: "Fitness", correct: false },
            { text: "Zumba", correct: false },
        ]
    },
    {
        question: "The following statements define dancing as stress management EXCEPT:",
        answers: [
            { text: "A dance can be used in many ways and one function is to relieve stress", correct: false },
            { text: "Through dancing, we lead to an unhealthy lifestyle", correct: true },
            { text: "To avoid chronic illness or disease, we opted to seek activities to have a healthy living.", correct: false },
            { text: "In dancing, it avoids stress and cam make our life easy and much more fun", correct: false },
        ]
    },
    {
        question: "The following are the causes and effects of stress EXCEPT:",
        answers: [
            {text: "Anxiety", correct:false},
            {text: "Panic", correct:false},
            {text: "Joy", correct:true},
            {text: "Misery", correct:false},
        ]
    },
    {
        question: "Among the selection below, what is/are the reason why dancing is enjoyable?",
        answers: [
            {text: "it has physical and mental benefits", correct:false},
            {text: "Helps you connect to who you really are", correct:false},
            {text: "It plays a vital role in self-expression", correct:false},
            {text: "All of the above", correct:true},
        ]
    },
    {
        question: "How do you call a chemical in our brain that transmits messages from the nervous system to the different parts of the body?",
        answers: [
            {text: "Endorphin", correct: false},
            {text: "Dopamine", correct: false},
            {text: "Norepinephrine", correct: false},
            {text: "Neurotransmitters", correct: true}
        ]
    },
    {
        question: "It is called the body's natural pain killer to reduce stress and improve mind's perception.",
        answers: [
            {text: "Endorphin", correct: true},
            {text: "Dopamine", correct: false},
            {text: "Norepinephrine", correct: false},
            {text: "Neurotransmitters", correct: false}
        ]
    },
    {
        question: "The following are the physical benefits of dancing EXCEPT:",
        answers: [
            {text: "Improved condition of heart and lungs.", correct: false},
            {text: "Increased muscular strength and endurance.", correct: false},
            {text: "Improved physical confidence.", correct: false},
            {text: "Improved general and psychological well-being.", correct: true}
        ]
    },
    {
        question: "Which of the following are the mental benefits of dancing?",
        answers: [
            {text: "Improved muscle tone and strength.", correct: false},
            {text: "Greater self-confidence, and self-esteem.", correct: true},
            {text: "Improved condition of your heart and lungs.", correct: false},
            {text: "Stronger bones.", correct: false}
        ]
    },
    {
        question: "How can dancing improve your life and health?",
        answers: [
            {text: "Dancing will decrease your chances of developing heart disease.", correct: false},
            {text: "Dancing improves positive feelings, behavior, and communication.", correct: false},
            {text: "Keeping you physically strong isn’t the only benefit dancing provides, but it can also provide social and emotional health.", correct: false},
            {text: "All of the above.", correct: true}
        ]
    },
    {
        question: "Why is dancing good for the brain?",
        answers: [
            {text: "Dancing increases depression symptoms", correct: false},
            {text: "Dancing supports motor, emotional, and intellectual brain functions.", correct: true},
            {text: "Dancing never stimulates nerve growth factor.", correct: false},
            {text: "Dancing declines memory.", correct: false}
        ]
    }
    
];

const questionsElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.style.display = "block";
    } else {
        nextButton.innerHTML = "Restart";
        nextButton.style.display = "block";
        showScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function showScore() {
    resetState();
    const percentage = (score / questions.length) * 100;
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!<br>Accuracy: ${percentage.toFixed(2)}%`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";

    // Save the accuracy score to localStorage
    localStorage.setItem("philoQuizAccuracy", percentage.toFixed(2));

    // Create and display the Home button
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.classList.add("home");
    homeButton.addEventListener("click", () => {
        window.location.href = "testknowledge.html"; // Change this to your home page URL
    });
    document.querySelector(".bottom-part").appendChild(homeButton);
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        startQuiz();
    }
});

startQuiz();
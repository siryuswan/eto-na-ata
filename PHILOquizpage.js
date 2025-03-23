const questions = [
    {
        question: "Which describes a holistic perspective?",
        answers: [
            {text: "It is a view centered on a single portion of an entire object", correct: false},
            {text: "It looks at all aspects of the given problem or situation", correct: true},
            {text: "All aspects are important in the decision-making", correct: false},
            {text: "Everything is tied together to form a general view", correct: false},
        ] 
    },

    {
        question: "Which allows a person to look back on previous experiences and evaluate the meaning or significance of his or her life?",
        answers: [
            {text: "Philosophical Question", correct: false},
            {text: "Philosophical Perspective", correct: false},
            {text: "Philosophical Reflection", correct: true},
            {text: "Philosophical Inquiry", correct: false},
        ]
    },

    {
        question: "What is Philosophy?",
        answers: [
            {text: "Love of good will", correct: false},
            {text: "Love of wisdom", correct: true},
            {text: "Love of critical thinking", correct: false},
            {text: "Love of logic", correct: false},
        ]
    },

    {
        question: "Which demonstrates a partial point of view?",
        answers: [
            {text: "Refer to single source of information", correct: true},
            {text: "Participate in class discussion", correct: false},
            {text: "Listen to the advice of both parents and teachers", correct: false},
            {text: "Watch video over the internet", correct: false},
        ]
    },

    {
        question: "Who may have already developed a broader philosophical perspective?",
        answers: [
            {text: "PJ who monitors his classmates' emotional well-being", correct: false},
            {text: "Karl who listens to both sides of arguments before making judgment", correct: true},
            {text: "Franz who chats his friends about their beliefs", correct: false},
            {text: "Jacques who is talkative", correct: false},
        ]
    },

    {
        question: "Is philosophy only for philosophers?",
        answers: [
            {text: "Yes, because philosophy is for people who love wisdom", correct: false},
            {text: "Yes, because only a few can appreciate its value", correct: false},
            {text: "No, because anyone can do an act of philosophizing", correct: true},
            {text: "No, because philosophy can be taken as a course by any person", correct: false},
        ]
    },

    {
        question: "If the question, 'Why am I here?' is philosophical, which answer supports it?",
        answers: [
            {text: "I am here to continue my SHS in spite of pandemic.", correct: false},
            {text: "I am here to socialize with others as a person-for-others.", correct: false},
            {text: "I am here to realize the meaning and purpose of my existence.", correct: true},
            {text: "I am here to acquire knowledge and skills through experiences.", correct: false}
        ]
    },
    {
        question: "Which denies the argument that philosophy is dead because its functions are already replaced by science?",
        answers: [
            {text: "There are questions that scientific method cannot provide answers.", correct: true},
            {text: "Philosophical questions do not exist because everything can be discovered and answered through scientific method and empirical data.", correct: false},
            {text: "Philosophy is now just part of a tradition in search for knowledge.", correct: false},
            {text: "Taking up philosophy is irrelevant, weird, and has no practical value.", correct: false}
        ]
    },
    {
        question: "Which denies that the meaning of philosophy is understood by just looking into its etymological definition?",
        answers: [
            {text: "It's sufficient to note that philosophy's etymology can easily give a clear understanding of its meaning.", correct: false},
            {text: "It's not sufficient because the meaning of philosophy is well understood by doing an act of philosophizing.", correct: true},
            {text: "It's sufficient to note that the Greek philosophers had proven themselves to be real lovers of wisdom.", correct: false},
            {text: "It's not sufficient because the meaning of philosophy is not confined within its root words alone.", correct: false}
        ]
    },
    {
        question: "Which does not describe a philosophical question?",
        answers: [
            {text: "Philosophical question has a definite and ready answer for everything.", correct: true},
            {text: "Philosophical question is a kind of question that endures.", correct: false},
            {text: "Philosophical question makes sense of our experiences.", correct: false},
            {text: "None of these", correct: false}
        ]
    },

    {
        question: "Which does NOT show how valuable doing philosophy is?",
        answers: [
            {text: "Search for meaning is achieved through philosophy.", correct: false},
            {text: "Philosophy as a pursuit of a way of life is defined.", correct: false},
            {text: "Critical and analytical thinkers are produced.", correct: false},
            {text: "Philosophy’s questions can be answered by scientific method.", correct: true}
        ]
    },
    {
        question: "Which question will lead to holistic perspective?",
        answers: [
            {text: "What is your name?", correct: false},
            {text: "Where do you live?", correct: true},
            {text: "Why do you exist?", correct: false},
            {text: "How will you fulfill your dreams?", correct: false}
        ]
    },
    {
        question: "Which came first? Is it the chicken or is it the egg? Which answer expresses holistic perspective?",
        answers: [
            {text: "Alphabetically, it is the chicken.", correct: false},
            {text: "Biblically, it is the chicken because Noah put a pair of them inside the ark.", correct: false},
            {text: "It depends on one’s point of view: from developmental or reproductive point of view.", correct: true},
            {text: "It is the egg.", correct: false}
        ]
    },
    {
        question: "Which does not lead to a philosophical reflection?",
        answers: [
            {text: "Is one plus one equal to two?", correct: true},
            {text: "Does God exist?", correct: false},
            {text: "What is the meaning of your life?", correct: false},
            {text: "Why do you live?", correct: false}
        ]
    },
    {
        question: "Who among these students expresses analytic philosophy?",
        answers: [
            {text: "Jacques: 'Analyze and define the fundamental concepts.'", correct: true},
            {text: "Vaughn: 'Examine your beliefs.'", correct: false},
            {text: "Vladimir: 'Criticize your assumptions.'", correct: false},
            {text: "Marcus: 'Remove your biases.'", correct: false}
        ]
    },

    {
        question: "Which is not an opinion?",
        answers: [
            {text: "Thales believed that reality is composed of water.", correct: false},
            {text: "Anaximander believed that the earth is cylindrical and suspended in space.", correct: false},
            {text: "Heraclitus used the flames of fire to emphasize the idea of change.", correct: true},
            {text: "Parmenides believed that change is an illusion.", correct: false}
        ]
    },
    {
        question: "Which expresses truth of analytic statement?",
        answers: [
            {text: "A bachelor is an unmarried male.", correct: true},
            {text: "The sky is blue.", correct: false},
            {text: "The kitten is on the mat.", correct: false},
            {text: "The carabao is black.", correct: false}
        ]
    },
    {
        question: "Which expresses truth of empirical statement?",
        answers: [
            {text: "The kitten is a young cat.", correct: false},
            {text: "Water is H2O.", correct: false},
            {text: "The kitten is on the mat.", correct: true},
            {text: "A bachelor has no mother-in-law.", correct: false}
        ]
    },
    {
        question: "Which best describes Hume’s Correspondence Theory?",
        answers: [
            {text: "Man has prior knowledge of everything even before he was born.", correct: false},
            {text: "Nothing comes into the intellect without passing through the senses.", correct: true},
            {text: "I think, therefore I am", correct: false},
            {text: "Jose Rizal is the Philippine National Hero", correct: false},

        ]
    },
    {
        question: "Which statement is coherently true?",
        answers: [
            {text: "If I do this, what is it for me?", correct: false},
            {text: "I am good.", correct: false},
            {text: "The world is not flat.", correct: false},
            {text: "Nine divided by three is three.", correct: true}
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
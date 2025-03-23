const questions = [
    {
        "question": "Maaaring gamitin sa pagbabalangkas ang.",
        "answers": [
            {"text": "pasaklaw na pag-aayos ng mga ideya", "correct": true},
            {"text": "parirala o pangungusap lamang ang gagamiting paksa", "correct": false},
            {"text": "pangunahing paksa ang isusulat sa bawat aytem", "correct": false},
            {"text": "pagbuod sa kabuuang teksto", "correct": false}
        ]
    },
    {
        "question": "Alin sa mga sumusunod ang pangunahing ideya?",
        "answers": [
            {"text": "katutubong tradisyon ng paggamot", "correct": false},
            {"text": "Hudeo-kristiyanong tradisyon ng paggamot", "correct": false},
            {"text": "luma at bagong tradisyon ng paggamot", "correct": true},
            {"text": "siyentipikong tradisyon ng paggamot", "correct": false}
        ]
    },
    {
        "question": "Alin sa sumusunod ang maaaring gamiting matibay na ebidensya para sa argumento?",
        "answers": [
            {"text": "sariling karanasan", "correct": false},
            {"text": "balitang napanuod", "correct": true},
            {"text": "narinig na kuwento", "correct": false},
            {"text": "likhang kuwento", "correct": false}
        ]
    },
    {
        "question": "Kung ang seleksyon ay nagbibigay-linaw o nagpapaliwanag hinggil sa proseso, isyu, konsepto, o anumang paksa na nararapat na alisan ng pag-aalinlangan.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": true},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Kung ang teksto ay may layuning manghikayat at magpapaniwala sa pamamagitan ng pagbibigay ng mga rason at ebidensya.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": true}
        ]
    },
    {
        "question": "Kung ang teksto ay bumubuo ng isang imahe sa pamamagitan ng paglalantad ng mga katangian nito.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": true},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Kung ang teksto ay nagkukwento ng mga magkakaugnay na pangyayari.",
        "answers": [
            {"text": "pagsasalaysay", "correct": true},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Paraan ng pagpapahayag na nagbibigay ng posibleng sagot, dahilan at ebidensyang maaaring paniwalaan o hindi.",
        "answers": [
            {"text": "mag-analisa", "correct": false},
            {"text": "mag-organisa", "correct": false},
            {"text": "manghikayat", "correct": true},
            {"text": "magbigay ng impormasyon", "correct": false}
        ]
    },
    {
        "question": "Paraan ng pagpapahayag na nagbibigay ng posibleng sagot sa pamamagitan ng paliwanag at ebalwasyon.",
        "answers": [
            {"text": "mag-analisa", "correct": true},
            {"text": "mag-organisa", "correct": false},
            {"text": "manghikayat", "correct": false},
            {"text": "magbigay ng impormasyon", "correct": false}
        ]
    },
    {
        "question": "Ayon kay Karen Gocsik (2014), isa sa mahahalagang konsepto ng akademikong pagsulat ay ____________.",
        "answers": [
            {"text": "nakatuon sa disiplina o kurso na kukunin sa unibersidad", "correct": false},
            {"text": "nagpapahayag ng pananaliksik bilang bahagi ng proseso", "correct": false},
            {"text": "nararapat maglahad ng importanteng argumento", "correct": true},
            {"text": "nagpapakilala sa paksa at layunin ng isusulat", "correct": false}
        ]
    },
    {
        "question": "Alin sa sumusunod ang maituturing na hindi katangian ng pagbabalangkas?",
        "answers": [
            {"text": "maiiwasan mong mawala sa pokus habang nagsusulat ng sanaysay dahil para itong mindmap", "correct": false},
            {"text": "mas magiging madali sa iyong ayusin ang mga ideya sa iyong sanaysay", "correct": false},
            {"text": "mas mapag-iisipan mong mabuti kung paano mo sisimulan o tatapusin ang iyong sanaysay", "correct": false},
            {"text": "magagawang ulit-ulitin ang mga ideyang isasama sa pagsulat", "correct": true}
        ]
    },


    {
        "question": "Paraan ng pagpapahayag na nagpapalawak at nagpapalalim sa kaalaman ng mambabasa.",
        "answers": [
            {"text": "mag-analisa", "correct": false},
            {"text": "manghikayat", "correct": false},
            {"text": "mag-organisa", "correct": false},
            {"text": "magbigay ng impormasyon", "correct": true}
        ]
    },
    {
        "question": "Ito ay naghahangad na makapagbigay impormasyon at mga paliwanag.",
        "answers": [
            {"text": "mapanghikayat na pagsulat", "correct": false},
            {"text": "impormatib na pagsulat", "correct": true},
            {"text": "malikhaing pagsulat", "correct": false},
            {"text": "malayang pagsulat", "correct": false}
        ]
    },
    {
        "question": "Ito ay naglalayong makumbinsi ang mga mambabasa tungkol sa isang katwiran, opinyon o paniniwala.",
        "answers": [
            {"text": "mapanghikayat na pagsulat", "correct": true},
            {"text": "impormatib na pagsulat", "correct": false},
            {"text": "malikhaing pagsulat", "correct": false},
            {"text": "malayang pagsulat", "correct": false}
        ]
    },
    {
        "question": "Ito ay ginagawa ng mga manunulat ng mga akdang pampanitikan na ang layunin ng awtor ay magpahayag ng kathang-isip, imahinasyon, ideya, damdamin o kumbinasyon ng mga ito.",
        "answers": [
            {"text": "mapanghikayat na pagsulat", "correct": false},
            {"text": "impormatib na pagsulat", "correct": false},
            {"text": "malikhaing pagsulat", "correct": true},
            {"text": "malayang pagsulat", "correct": false}
        ]
    },


    {
        "question": "Sa talumpating ito, ipinapaliwanag ang kahulugan at kahalagahan ng isang konsepto o salita.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": true},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Sa talumpating ito, ang susing salita ay nagkukuwento.",
        "answers": [
            {"text": "pagsasalaysay", "correct": true},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Binubuo ito ng mga matitibay na argumento o mga dahilan upang mapasang-ayon ang mga tagapakinig.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": false},
            {"text": "pangangatwiran", "correct": true}
        ]
    },
    {
        "question": "Nagpapahayag ito ng mga katangian batay sa limang pandama.",
        "answers": [
            {"text": "pagsasalaysay", "correct": false},
            {"text": "paglalahad", "correct": false},
            {"text": "paglalarawan", "correct": true},
            {"text": "pangangatwiran", "correct": false}
        ]
    },
    {
        "question": "Isang tekstong binibigkas kaya dapat madulas bigkasin ang mga salita at angkop ang haba ng mga pangungusap.",
        "answers": [
            {"text": "tula", "correct": false},
            {"text": "dula", "correct": false},
            {"text": "talumpati", "correct": true},
            {"text": "debate", "correct": false}
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
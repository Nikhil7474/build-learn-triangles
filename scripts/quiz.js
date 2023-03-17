const quizForm = document.querySelector(".my-quiz")
const checkBtn = document.querySelector("#check-answer")
const outputElem = document.querySelector("#output")

const answers = ["90°",
                "right angled",
                "one right angle",
                "12, 16, 20",
                "Equilateral triangle",
                "100°",
                "30°",
                "a + b + c",
                "no",
                "45°",]

function checkAnswer() {

    const formResult = new FormData(quizForm)

    let score = 0;
    let index = 0

    for(let value of formResult.values()){
        if(value === answers[index]){
            score = score + 1
        }
        index = index + 1
    }
    outputElem.innerText = "You score is: " + score;
}

checkBtn.addEventListener("click", checkAnswer)
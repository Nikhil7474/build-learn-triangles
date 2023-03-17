const angles = document.querySelectorAll(".angle-input")
const isTriangle = document.querySelector("#is-triangle-btn")
const outputElem = document.querySelector("#output")


function getAllInputsValues() {
    if (angles[0].value, angles[1].value, angles[2].value) {
        const sum = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value)
        validateTriangle(sum)
    }else{
        outputMsg("Please fill all fields")
    }
}

function validateTriangle(triSum) {
    if (triSum === 180) {
        outputMsg("Yes, Its triangle");
    } else {
        outputMsg("Nop!, it's not triangle");
    }
}

function outputMsg(msg){
    outputElem.innerText = msg
    setTimeout(() => {
        outputElem.innerText = "";
    }, 3000);
}

isTriangle.addEventListener("click", getAllInputsValues)
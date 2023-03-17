const inputs = document.querySelectorAll(".input-value")
const calculateBtn = document.querySelector("#Calculate-hypotenuse")
const outputElem = document.querySelector("#output")

function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b
    return sumOfSquare
}

function calculateHypotenuse(){
    if( inputs[0].value|| inputs[1].value){
    const basicSum = calculateSumOfSquare(
        inputs[0].value, 
        inputs[1].value
    )

    const finalResult = Math.sqrt(basicSum)

    outputElem.innerText = "The length of hypotenuse is " + finalResult
}else{
    outputElem.innerText = "The length of hypotenuse is 0"
}
}


calculateBtn.addEventListener("click", calculateHypotenuse)
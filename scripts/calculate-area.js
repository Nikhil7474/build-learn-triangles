const sidesOfTri = document.querySelectorAll(".input-sides");
const calculateBtn = document.querySelector("#calculate")
const outputElem = document.querySelector("#output")


function calculateArea(e) {

    const firstTriValue = Number(sidesOfTri[0].value)
    const secTriValue = Number(sidesOfTri[1].value)
    const thirdTriValue = Number(sidesOfTri[2].value)

    if (firstTriValue + secTriValue > thirdTriValue &&
        secTriValue + thirdTriValue > firstTriValue &&
        firstTriValue + thirdTriValue > secTriValue) {

        const semiPerimeter = (firstTriValue + secTriValue + thirdTriValue) / 2;

        const result = Math.sqrt(
            semiPerimeter *
            (semiPerimeter - firstTriValue) *
            (semiPerimeter - secTriValue) *
            (semiPerimeter - thirdTriValue)
        ).toFixed(4)
        outputElem.innerText = `Area of a triangle using heron's formula is ${result} units`;
    } else {
        outputElem.innerText = "Enter valid side lengths such that each side lengths";
    }
}

calculateBtn.addEventListener("click", calculateArea)
function CompareNumbers() {
    let userNumber = parseInt(document.getElementById("userNumber").value)
    let max = parseInt(document.getElementById("max").value)
    let min = parseInt(document.getElementById("min").value)

    let randomNumber = Math.round(min + Math.random() * (max - min))

    document.getElementById("randomNumber").value = randomNumber.toString()

    let resultText = userNumber === randomNumber ? "Congratulations!" : "Try again"
    let resultColor = userNumber === randomNumber ? "green" : "red"

    document.getElementById("resultText").value = resultText
    document.getElementById("result").style.background = resultColor
}
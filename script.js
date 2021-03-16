function myColor(){
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value

    let color = "rgb("+ red + " , " + green + " , " + blue + ")"

    document.body.style.backgroundColor = color;
    document.getElementById("box").value = color;
}

document.getElementById("red").addEventListener("input", myColor)
document.getElementById("green").addEventListener("input", myColor)
document.getElementById("blue").addEventListener("input", myColor)
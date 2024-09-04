function changeText() {
    document.getElementById("header").innerHTML = "You have changed the header text!";
}

function changeColor() {
    let paragraphs = document.getElementsByClassName("content");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "grey";
    }
}

function moveParagraph() {
    let paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        paragraphs[0].style.position = "relative";
        paragraphs[0].style.top = "500px";
    }
}

function changeImage() {
    document.getElementById("myImage").src = "2.jpeg";
}
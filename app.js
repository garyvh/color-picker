let hex = true;
let rgb = [0, 0, 0];
let hexCode = "";
let feedback = document.querySelector(".container p");
let main = document.querySelector("main");

let randomizeColor = function () {
    rgb[0] = Math.floor(Math.random() * (255 - 0 + 1));
    rgb[1] = Math.floor(Math.random() * (255 - 0 + 1));
    rgb[2] = Math.floor(Math.random() * (255 - 0 + 1));
    hexCode = (rgb[0].toString(16).padStart(2, '0') + rgb[1].toString(16).padStart(2, '0') + rgb[2].toString(16).padStart(2, '0')).toUpperCase();

    main.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    if (hex) {
        let hexCode = (rgb[0].toString(16).padStart(2, '0') + rgb[1].toString(16).padStart(2, '0') + rgb[2].toString(16).padStart(2, '0')).toUpperCase();
        feedback.textContent = "background color: #" + hexCode;
    } else {
        feedback.textContent = "background color: rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", randomizeColor);

let li = document.querySelectorAll(".nav-links li");
li[0].addEventListener("click", () => {
    if (hex) {
        feedback.textContent = "background color: rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    }
    hex = false;
});
li[1].addEventListener("click", () => {
    if (!hex) {
        feedback.textContent = "background color: #" + hexCode;
    }
    hex = true;
});
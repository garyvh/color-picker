let hex = true;
let rgb = [0, 0, 0];
let hexCode = "";
let random_colors = [];
let feedback = document.querySelector(".container p");
let main = document.querySelector("main");
let select = document.querySelector("select");

const NUM_LIST_COLORS = 5;

let showColor = function (event) {
    let color = event.target.value;
    feedback.textContent = color;
    main.style.backgroundColor = color;
}

let generateRandomColors = function () {
    for (let i = 0; i < NUM_LIST_COLORS; i++) {
        rgb[0] = Math.floor(Math.random() * (255 + 1));
        rgb[1] = Math.floor(Math.random() * (255 + 1));
        rgb[2] = Math.floor(Math.random() * (255 + 1));
        let newColor = (rgb[0].toString(16).padStart(2, '0') + rgb[1].toString(16).padStart(2, '0') + rgb[2].toString(16).padStart(2, '0')).toUpperCase();
        random_colors[i] = "#" + newColor;
        let inverse_color = ((255 - rgb[0]).toString(16).padStart(2, '0') + (255 - rgb[1]).toString(16).padStart(2, '0') + (255 - rgb[2]).toString(16).padStart(2, '0')).toUpperCase();

        let option = document.createElement("option");
        option.value = "#" + newColor;
        option.style.backgroundColor = "#" + newColor;
        option.innerText = "#" + newColor;
        option.style.color = inverse_color;
        // option.onselect = (e) => showColor(e);
        select.onchange = showColor;
        select.appendChild(option);
    }
    // console.log(random_colors);
}

generateRandomColors();

let randomizeColor = function () {
    rgb[0] = Math.floor(Math.random() * (255 - 0 + 1));
    rgb[1] = Math.floor(Math.random() * (255 - 0 + 1));
    rgb[2] = Math.floor(Math.random() * (255 - 0 + 1));
    hexCode = (rgb[0].toString(16).padStart(2, '0') + rgb[1].toString(16).padStart(2, '0') + rgb[2].toString(16).padStart(2, '0')).toUpperCase();

    main.style.backgroundColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    if (hex) {
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
let randomizeColor = function () {
    let main = document.querySelector("main");
    let feedback = document.querySelector(".container p");

    let randRed = Math.floor(Math.random() * (255 - 0 + 1));
    let randGreen = Math.floor(Math.random() * (255 - 0 + 1));
    let randBlue = Math.floor(Math.random() * (255 - 0 + 1));
    let hexCode = (randRed.toString(16).padStart(2, '0') + randGreen.toString(16).padStart(2, '0') + randBlue.toString(16).padStart(2, '0')).toUpperCase();
    
    main.style.backgroundColor = "rgb(" + randRed + ", " + randGreen + ", " + randBlue + ")";
    feedback.textContent = "background color: #" + hexCode;
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", randomizeColor);
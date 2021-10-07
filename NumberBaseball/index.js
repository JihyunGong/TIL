let randomNumArr = [];
let strike = 0;
let ball = 0;
let out = 0;
let count = 0;

const btn = document.querySelector(".btn");
btn.addEventListener("click", function start() {
    if (strike === 3 || count === 10) { // check if you win or fail
        btn.removeEventListener("click", start); // remove click event
    } else { // resume the game if you want, but only before winning or failing
        randomNumArr.length = 0;
        count = 0;
        let randomNum = 0;
        for (let i = 0; i < 3; i++) {
            randomNum = Math.floor(Math.random() * 10); // create a random number from 0 to 9
            if (randomNumArr.indexOf(String(randomNum)) === -1) { // check if a random number is duplicated
                randomNumArr.push(String(randomNum));
            } else {
                i--;
            }
        }
        alert("[NO DUPLICATION] Please enter three digits on the below box.")
    }
});

const input = document.querySelector("#input");
input.addEventListener("keyup", function enter(ev) {
    let number = ev.target.value.split(""); // make input value into array
    strike = 0;
    ball = 0;
    out = 0;

    if (ev.keyCode === 13) { // check if the enter-key is pressed 
        if (number.length !== 3) { // check if input value's length exceeds 3
            alert("Please enter only THREE digits!");
        } else {
            count++;
            for (let i = 0; i < number.length; i++) {
                if (number[i] === randomNumArr[i]) { // check if the same number is in the same spot
                    strike++;
                } else if (number.includes(randomNumArr[i])) { // check if the number is in other spots
                    ball++;
                } else {
                    out++;
                }
            }
            if (strike === 3 || count === 10) { // check if you win or fail
                if (strike === 3) {
                    alert("YOU WIN!");
                } else {
                    alert("YOU FAIL!");
                }
                const gameBox = document.querySelector(".game-box");
                const resBtn = document.createElement("button"); // create an element to restart the game
                gameBox.appendChild(resBtn);
                resBtn.innerHTML = "Click me to restart the game.";
                resBtn.style.backgroundColor = "Black";
                resBtn.style.borderRadius = "25px";
                resBtn.style.marginTop = "5px";
                resBtn.style.fontSize = "20px";
                resBtn.style.color = "white";
                resBtn.addEventListener("click", function () {
                    location.reload(); // reload the page to restart the game
                });
                input.removeEventListener("keyup", enter); // remove keyup event
            } else {
                alert("Strike: " + strike + "\nBall: " + ball + "\nOut: " + out + "\n\nChance: " + count + "/10"); // display the current state
            }
        }
    }
});


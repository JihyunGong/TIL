let answerCount = 1; // count the number of answers
let fCount = 0; // count the number of answers for front-end
let bCount = 0; // count the number of answers for back-end

const main = document.querySelector(".main");
const intro = document.querySelector(".intro");
const start = document.querySelector(".start");
const answer = document.querySelectorAll(".answer");

// when clicking start button, the introduction paragraph and start button will be vanished
// but, answers will be shown
start.addEventListener("click", function () {
    intro.style.display = "none";
    start.style.display = "none";
    answer[0].style.display = "block";
    answer[1].style.display = "block";
});

// add event to move to the further questions for getting result
answer[0].addEventListener("click", clickAnswer);
answer[1].addEventListener("click", clickAnswer);

function clickAnswer(ev) {
    answerCount++;
    if (ev.target === answer[0]) {
        fCount++;
    } else {
        bCount++;
    }

    if (answerCount === 2) {
        answer[0].innerHTML = "라면을 끓일 때, 오늘은 어떤 레시피로 끓여볼까 고민한다.";
        answer[1].innerHTML = "라면을 끓일 때, 항상 나만의 비법으로 끓인다.";
    } else if (answerCount === 3) {
        answer[0].innerHTML = "친구들은 종종 나에게 물건 좀 \"그만\" 사라고 한다.";
        answer[1].innerHTML = "친구들은 종종 나에게 물건 좀 사라고 한다.";
    } else if (answerCount === 4) {
        answer[0].innerHTML = "등산을 할 때, 좋은 경치를 볼 수 있는 루트를 택한다. 간혹 다른 길로 빠지기도...";
        answer[1].innerHTML = "등산을 할 때, 최단 거리로 갈 수 있는 루트를 택한다.";
    } else {
        answer[0].innerHTML = "친구의 고민을 들어줄 때, 공감을 먼저 해준다.";
        answer[1].innerHTML = "공감은 뒷 일!! 해결 방안을 같이 고민한다.";
    }

    // when done, the result and restart button will be shown
    if (answerCount > 5) {
        answer[0].style.display = "none";
        answer[1].style.display = "none";

        // add result paragraph
        let result = document.createElement("P");
        main.appendChild(result);
        if (fCount > bCount) {
            result.innerHTML = "당신은 \"프론트엔드형 개발자\" 입니다.";
        } else {
            result.innerHTML = "당신은 \"백엔드형 개발자\" 입니다."
        }
        result.style.backgroundColor = "rgb(252, 240, 185)";
        result.style.color = "gray";
        result.style.padding = "15px";
        result.style.borderRadius = "5px";
        result.style.fontSize = "30px";

        // add restart button
        let restart = document.createElement("BUTTON");
        main.appendChild(restart);
        restart.innerHTML = "다시 시작하기!";
        restart.style.fontSize = "20px";
        // add event for restart button
        restart.addEventListener("click", function() {
            location.reload();
        })
    }
}



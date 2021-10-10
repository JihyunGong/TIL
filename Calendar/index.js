const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const day = document.querySelector(".day");
const date = document.querySelector(".date");
const monthYear = document.querySelector(".monthYear");
const calBody = document.querySelector(".calendar-body");
const btn = document.querySelector(".carousel");

let mv = 0; // a variable to move to the previous or next month

displayCalInfo(mv); // display the current month's calendar information when page loads

function displayCalInfo(mv) {
    let now = new Date();
    now.setMonth(now.getMonth() + mv); // change setting for month with mv
    let day_ = now.getDay();
    let date_ = now.getDate();
    let month_ = now.getMonth();
    let year_ = now.getFullYear();

    let firstDay = new Date(year_, month_, 1).getDay();
    let lastDate = new Date(year_, month_ + 1, 0).getDate();

    let row = 6;
    let col = 7;
    let num = 1;

    // display day
    if (mv !== 0) {
        day.innerHTML = dayList[firstDay];
    } else {
        day.innerHTML = dayList[day_];
    }

    // display date
    if (mv !== 0) {
        date.innerHTML = num;
    } else {
        date.innerHTML = date_;
    }

    // display month and year
    monthYear.innerHTML = monList[month_] + " " + year_;

    // display calendar table
    calBody.innerHTML = "";
    for (let i = 0; i < row; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < col; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            if ((i === 0 && j < firstDay) || num > lastDate) {
                td.innerHTML = "";
            } else {
                if (mv === 0 && num === date_) {
                    td.style.color = "red";
                }
                td.innerHTML = num++;
            }
        }
        calBody.appendChild(tr);
    }
}

// add click event to move the previous or next month 
btn.addEventListener("click", function (ev) {
    if (ev.target.className.includes("prev")) {
        displayCalInfo(--mv);
    } else if (ev.target.className.includes("next")) {
        displayCalInfo(++mv);
    } else {
        return;
    }
});

// add click event to specify day and date of clicked date
calBody.addEventListener("click", function (ev) {
    if (ev.target.textContent !== "") {
        let d = new Date();
        d.setMonth(d.getMonth() + mv, d.getDay() + (ev.target.textContent - d.getDay()));
        day.innerHTML = dayList[d.getDay()];
        date.innerHTML = ev.target.textContent;
    } else {
        return;
    }
});

// add mouseover event to make border of event target
calBody.addEventListener("mouseover", function (ev) {
    if (ev.target.textContent !== "") {
        ev.target.style.border = "1px solid black";
    } else {
        return;
    }
});

// add mouseout event to remove border of event target
calBody.addEventListener("mouseout", function (ev) {
    if (ev.target.textContent !== "") {
        ev.target.style.border = "none";
    } else {
        return;
    }
});


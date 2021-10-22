// Jihyun Gong

let rst = ""; // a variable to save the result value
let temp = ""; // a variable to save the temporary value when clicking operations
let oper = ""; // a variable to save the arithmetic operations 

const result = document.querySelector("th");

const calBody = document.querySelector(".cal-body");
calBody.addEventListener("click", function (ev) {
    let tc = ev.target.textContent;

    switch (tc) {
        // clear all history by reloading the page
        case "AC": 
            location.reload();
            break;
        // change a value into the positive or negative number
        case "+/-":
            result.innerHTML *= -1;
            rst = Number(result.innerHTML);
            break;
        // calculate a value as a percentage
        case "%":
            result.innerHTML = Math.round((result.innerHTML / 100) * 1e12) / 1e12;
            rst = Number(result.innerHTML);
            break;
        // remove a digit from the value                
        case "«":
            if (result.innerHTML === "0" || result.innerHTML.length < 2) {
                result.innerHTML = "0";
                rst = Number(result.innerHTML);
                break;
            }
            result.innerHTML = result.innerHTML.slice(0, -1);
            rst = Number(result.innerHTML);
            break;
        // make a value into a decimal value  
        case ".":
            if (!result.innerHTML.includes(".")) {
                result.innerHTML += tc;
                rst = Number(result.innerHTML);
            }
            break;
        // save arithmetic operations to calculate values later 
        case "÷":
        case "×":
        case "-":
        case "+":
            rst = Number(result.innerHTML);
            temp = rst;
            result.innerHTML = "0";
            oper = tc;
            break;
        // calculate the values    
        case "=":
            if (oper === "÷") {
                temp /= rst;
            } else if (oper === "×") {
                temp *= rst;
            } else if (oper === "-") {
                temp -= rst;
            } else {
                temp += rst;
            }
            result.innerHTML = Math.round(temp * 1e12) / 1e12;
            break;
        // display the typed numbers on the top   
        default:
            if (result.innerHTML === "0") {
                result.innerHTML = "";
            }
            result.innerHTML += tc;
            rst = Number(result.innerHTML);
    }
})


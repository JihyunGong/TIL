function solution(dartResult) {
    var answer = 0;
    const extractDigit = dartResult.split(/\D/g);
    const extractBoOp = dartResult.split(/\d/g);
    const digits = [];
    const bonusOptions = [];
    
    function makeArr(e) {
        for(let i = 0; i < e.length; i++) {
            if(e[i] !== "") {
                if(!isNaN(e[i])) {
                    digits.push(e[i]);
                } else {
                    bonusOptions.push(e[i]);
                }
            }
        }
    }
    makeArr(extractDigit);
    makeArr(extractBoOp);
    
    for(let i = 0; i < digits.length; i++) {
        // bonus
        if(bonusOptions[i].includes("S")) {
            digits[i] = Math.pow(digits[i], 1);
        } else if(bonusOptions[i].includes("D")) {
            digits[i] = Math.pow(digits[i], 2);
        } else {
            digits[i] = Math.pow(digits[i], 3);
        }
        // option
        if(bonusOptions[i].includes("*")) {
            if(i === 0) {
                digits[i] *= 2;
            } else {
                digits[i - 1] *= 2;
                digits[i] *= 2;
            }
        } else if(bonusOptions[i].includes("#")) {
            digits[i] *= -1;
        } 
    }
    
    answer = digits.reduce((sum, elem) => {
        return sum + elem;
    }, 0);
    
    return answer;
}

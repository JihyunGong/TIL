function solution(numbers, hand) {
    var answer = '';
    let lHandPos = '*';
    let rHandPos = '#';

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += 'L';
            lHandPos = numbers[i];

        } else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += 'R';
            rHandPos = numbers[i];
        } else {
            let lDis = 0;
            let rDis = 0;
            if(numbers[i] === 2) {
                if(lHandPos === 2) {
                    lDis = 0;
                } else if(lHandPos === 1 || lHandPos === 5) {
                    lDis = 1;
                } else if(lHandPos === 4 || lHandPos === 8) {
                    lDis = 2;
                } else if(lHandPos === 7 || lHandPos === 0) {
                    lDis = 3;
                } else {
                    lDis = 4;
                }
                if(rHandPos === 2) {
                    rDis = 0;
                } else if(rHandPos === 3 || rHandPos === 5) {
                    rDis = 1;
                } else if(rHandPos === 6 || rHandPos === 8) {
                    rDis = 2;
                } else if(rHandPos === 9 || rHandPos === 0) {
                    rDis = 3;
                } else {
                    rDis = 4;
                }
            } else if(numbers[i] === 5) {
                if(lHandPos === 5) {
                    lDis = 0;
                } else if(lHandPos === 2 || lHandPos === 4 || lHandPos === 8) {
                    lDis = 1;
                } else if(lHandPos === 1 || lHandPos === 7 || lHandPos === 0) {
                    lDis = 2;
                } else {
                    lDis = 3;
                }
                if(rHandPos === 5) {
                    rDis = 0;
                } else if(rHandPos === 2 || rHandPos === 6 || rHandPos === 8) {
                    rDis = 1;
                } else if(rHandPos === 3 || rHandPos === 9 || rHandPos === 0) {
                    rDis = 2;
                } else {
                    rDis = 3;
                }
            } else if(numbers[i] === 8){
                if(lHandPos === 8) {
                    lDis = 0;
                } else if(lHandPos === 5 || lHandPos === 7 || lHandPos === 0) {
                    lDis = 1;
                } else if(lHandPos === 2 || lHandPos === 4 || lHandPos === '*') {
                    lDis = 2;
                } else {
                    lDis = 3;
                }
                if(rHandPos === 8) {
                    rDis = 0;
                } else if(rHandPos === 5 || rHandPos === 9 || rHandPos === 0) {
                    rDis = 1;
                } else if(rHandPos === 2 || rHandPos === 6 || rHandPos === '#') {
                    rDis = 2;
                } else {
                    rDis = 3;
                }
            } else {
                if(lHandPos === 0) {
                    lDis = 0;
                } else if(lHandPos === 8 || lHandPos === '*') {
                    lDis = 1;
                } else if(lHandPos === 5 || lHandPos === 7) {
                    lDis = 2;
                } else if(lHandPos === 2 || lHandPos === 4) {
                    lDis = 3;
                } else {
                    lDis = 4;
                }
                if(rHandPos === 0) {
                    rDis = 0;
                } else if(rHandPos === 8 || rHandPos === '#') {
                    rDis = 1;
                } else if(rHandPos === 5 || rHandPos === 9) {
                    rDis = 2;
                } else if(rHandPos === 2 || rHandPos === 6) {
                    rDis = 3;
                } else {
                    rDis = 4;
                }
            }
            if(lDis < rDis) {
                answer += 'L';
                lHandPos = numbers[i];
            } else if (lDis > rDis) {
                answer += 'R';
                rHandPos = numbers[i];
            } else {
                if(hand === "left") {
                    answer += 'L';
                    lHandPos = numbers[i];
                } else {
                    answer += 'R';
                    rHandPos = numbers[i];
                }
            }
        }
    }

    return answer;
}

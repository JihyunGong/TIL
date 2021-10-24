function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0;
    let sameCount = 0;
    let rank = [6, 5, 4, 3, 2];
    
    for(let i = 0; i < lottos.length; i++){
        if(lottos[i] === 0) {
            zeroCount++;
        }
        if(lottos.includes(win_nums[i])) {
            sameCount++;
        }  
    }
    // get maxRank
    if(rank.includes(zeroCount + sameCount)) {
        answer.push(rank.indexOf(zeroCount + sameCount) + 1);   
    } else {
        answer.push(6);
    }
    // get minRank
    if(rank.includes(sameCount)) {
        answer.push(rank.indexOf(sameCount) + 1);
    } else {
        answer.push(6);
    }    
    
    return answer;
}

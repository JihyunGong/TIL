function solution(x) {
    var answer = true;
    
    if(x >= 1 && x <= 10000) {
        let xArr = (x + '').split('');
        let xSum = 0;
        
        for(let i = 0; i < xArr.length; i++) {
            xSum += Number(xArr[i]);
        }
        if(x % xSum !== 0){
            answer = false;
        }
    }
    
    return answer;
}

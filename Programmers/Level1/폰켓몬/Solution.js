function solution(nums) {
    var answer = 1;
    const myPockets = nums.length / 2;
    
    for(let i = 1; i < nums.length; i++) {
        let diff = 0;   
        for(let j = 0; j < i; j++) {
            if(nums[i] !== nums[j]) {
                diff++;
            }
        }
        if(i === diff) {
            answer++;
        }
    }
    
    if(myPockets < answer) {
        answer = myPockets;
    }
    
    return answer;
}

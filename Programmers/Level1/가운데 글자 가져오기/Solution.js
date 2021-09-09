function solution(s) {
    var answer = '';
    let len = s.length;
  
    if(len % 2 > 0){
        answer = s.charAt(len / 2);
    } else{
        answer = s.charAt(len / 2 - 1) + s.charAt(len / 2);
    }
    
    return answer;
}

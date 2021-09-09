function solution(phone_number) {
    var answer = '';
    let count = 0;
    
    while(count < phone_number.length - 4){
        answer += "*";
        count++;
    }
    answer += phone_number.substring(phone_number.length - 4);
    
    return answer;
}

function solution(new_id) {
    var answer = '';

    answer = new_id.toLowerCase();
    answer = answer.replace(/[^a-z0-9\-\_\.]/g, "");
    answer = answer.replace(/\.+/g, ".");
    answer = answer.replace(/^[\.]/, "");
    answer = answer.replace(/[\.]$/, "");
    if(answer.length === 0) {
        answer = 'a';
    }
    if(answer.length > 15) {
        answer = answer.slice(0, 15);
    }
    answer = answer.replace(/[\.]$/, "");
    if(answer.length < 3) {
        while(answer.length < 3) {
            answer += answer.charAt(answer.length - 1);
        }
    }

    return answer;
}

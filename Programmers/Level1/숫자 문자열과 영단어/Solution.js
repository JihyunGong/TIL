function solution(s) {
    var answer = 0;
    let temp = '';
    
    if(s.length >= 1 && s.length <= 50){
        if(s.charAt(0) !== "z" && s.charAt(0) !== "0"){
            temp = s.replace(/zero/g, "0");
            temp = temp.replace(/one/g, "1");
            temp = temp.replace(/two/g, "2");
            temp = temp.replace(/three/g, "3");
            temp = temp.replace(/four/g, "4");
            temp = temp.replace(/five/g, "5");
            temp = temp.replace(/six/g, "6");
            temp = temp.replace(/seven/g, "7");
            temp = temp.replace(/eight/g, "8");
            temp = temp.replace(/nine/g, "9");
        }
    }
    answer = Number(temp);
    return answer;
}

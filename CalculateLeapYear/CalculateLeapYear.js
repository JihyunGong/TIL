var year = [2000, 2004, 2100, 2021];

for(var i = 0; i < year.length; i++){
  if((year[i] % 4 === 0 && year[i] % 100 !== 0) || year[i] % 400 === 0 ){
  console.log(year[i] + ' year is Leap Year.');
  } else{
  console.log(year[i] + ' year is not Leap Year.');
  }
}

//Expected Output:
// "2000 year is Leap Year."
// "2004 year is Leap Year."
// "2100 year is not Leap Year."
// "2021 year is not Leap Year."

//윤년 계산법: 연도를 4로 나누어 나머지가 0으로 떨어지는 해는 윤년이다. 그러나, 그 중 100으로 나누어 떨어지는 해는 윤년이 아니다. 
//            앞의 조건이 참이건 거짓이건 연도를 400으로 나누어 떨어지는 해는 윤년이다. 


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

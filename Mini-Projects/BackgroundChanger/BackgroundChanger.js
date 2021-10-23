const btn = document.querySelector("button");

btn.addEventListener("click", function(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 
    'A', 'B', 'C', 'D', 'E', 'F'];
  let hexCode = '#';

  for(let i = 0; i < 6; i++){
  hexCode += arr[Math.floor(Math.random() * arr.length)];
  }

  document.querySelector("p").innerHTML = "HEX COLOR:" + hexCode;
  document.querySelector("*").style.backgroundColor = hexCode;
});



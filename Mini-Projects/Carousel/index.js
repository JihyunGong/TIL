// create image array
const arr = [
    "images/image-1.png", "images/image-2.png", 
    "images/image-3.png", "images/image-4.png", "images/image-5.png"]; 

// select necessary elements
const arrow = document.querySelector(".arrow");
const dot = document.querySelector(".dot");
const photo = document.querySelector(".photo");

// add event listener to click left or right arrow
arrow.addEventListener("click", function(ev){
    let pos = 0;
    // find position of image
    for(let i = 0; i < arr.length; i++){
        if(photo.src.includes(arr[i])){
            pos = i;
        }
    }
    // slide images
    if(ev.target.className.includes("left")){
        if(pos === 0){
            photo.src = arr[4];
        } else{
            photo.src = arr[--pos];
        }
    } else if(ev.target.className.includes("right")){
        if(pos === 4){
            photo.src = arr[0];
        } else{
            photo.src = arr[++pos];
        }
    } else{
        return;
    }
})

// add event listener to click dot
dot.addEventListener("click", function(ev){
    let posStr = ev.target.className;
    // move images
    if(posStr.includes("first")){
        photo.src = arr[0];
    } else if(posStr.includes("second")){
        photo.src = arr[1];
    } else if(posStr.includes("third")){
        photo.src = arr[2];
    } else if(posStr.includes("fourth")){
        photo.src = arr[3];
    } else if(posStr.includes("fifth")){
        photo.src = arr[4];
    } else{
        return;
    }
});

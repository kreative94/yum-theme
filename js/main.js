//Set index to 0;
var slideIndex;
//Images array
var myImgs = ["img/kitty-cat-kitten-pet-45201.jpeg", "img/two-kitties.jpeg", "img/white-kitty.jpg"];

let slide = document.getElementById("slide");

function slideShow(n){
    var i;
    let slide = document.getElementById("slide");

    slideIndex = 0;
    slide.src = myImgs[slideIndex];

    if (n < myImgs.length){
        n = 0;
    }

    if (n > myImgs.length){
        slideIndex = 3;
    }

    for(i = 0; i < myImgs.length; i++){
        slideIndex += 1;
    }  
}

slideShow(1);

function nextImg(n){
    slideIndex += n;
}

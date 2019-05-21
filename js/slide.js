function aSlide (imgSrc, caption){
    this.imgSrc = imgSrc;
    this.caption = caption;
    this.getImgSrc = function(){
        return this.imgSrc;
    }

    this.getCaption = function(){
        return this.caption;
    }
}

//Slides 
//Create a new variable to create a new slide
var slide1 = new aSlide("img/beverage-blueberries-breakfast-2103962.jpg","Ice cream shake");
var slide2 = new aSlide("img/casual-delicious-dessert-2238610.jpg","I scream, you scream, we all scream for ice cream!");
var slide3 = new aSlide("img/colorful-colourful-cupcakes-587739.jpg", "Table full of cupcakes");
var slide4 = new aSlide("img/blur-cake-cheesecake-219293.jpg", "White Cheesecake");

//An array that displays all of the slides in HTML
var slideArray = [slide1, slide2, slide3, slide4];

//The HTML Element that the SLide Image will be displayed in
var slideImg = document.getElementById("slide");

//The HTML Element that the Slide caption will be displayed in
var slideText = document.getElementById("caption");

var modalImg = document.getElementById("gallery-img");

//The index
var index = 0;
showSlide(index);

var animEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
//Changes the slide
function changeIndex(n){
    showSlide(index += n);
}

$('#next').click(function(){
    $(slideImg).animate({opacity: 0.5});
    $(slideImg).animate({opacity: 1});
});

$('#prev').click(function(){
    $(slideImg).animate({opacity: 0.5});
    $(slideImg).animate({opacity: 1});
});

//Displays the current slide
function currentSlide(n){
    showSlide(index = n);
}

//Activates the slideshow
function showSlide(n){
    //Displays the img src
    slideImg.src = slideArray[index].getImgSrc();

    //Displays the caption in the element
    slideText.innerHTML = slideArray[index].getCaption(); 

    modalImg.src = slideArray[index].getImgSrc();

    //set index to 1 if n is greater than the slide array
    if (n > slideArray.length) {
        index = 1;
    }

    //Index is the slides' length if n is less than 1
    if (n < 1) {
        index = slideArray.length;
    }
} 



//The gallery modal
var modal = document.getElementById("gallery-modal");

//Opens the modal
function openModal(){
    modal.style.visibility = "visible";
}

//Closes the modal
function closeModal(){
    modal.style.visibility = "hidden";
}


function openMenu(){
    var menu = document.getElementById("menu");
    menu.style.visibility = 'visible';
}
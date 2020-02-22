// First Slider

var slideIndex = 1;
showSlides(slideIndex);
function plusSlide(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideImage");
    var dots = document.getElementsByClassName("demo");
    var paragraph = document.getElementById("paragraph");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    paragraph.innerHTML = dots[slideIndex - 1].alt;
}

// Second Slider

var blogIndex = 1;
showBlog(blogIndex);
function plusBlog(n) {
    showBlog(blogIndex += n);
}

function showBlog(n) {
    var x;
    var blog= document.getElementsByClassName("imageBlog");
    var paragraph2= document.getElementById("paragraph2");
    if (n > blog.length){
        blogIndex = 1
    }
    if (n < 1){
        blogIndex = blog.length
    }
    for (x = 0; x < blog.length; x++) {
        blog[x].style.display = "none";
    }
    blog[blogIndex - 1].style.display = "block";
}

// Video Slider
var videoIndex = 1;
showVideo(videoIndex);
function plusVideo(n) {
    showVideo(videoIndex += n);
}

function showVideo(n) {
    var z;
    var blog2= document.getElementsByClassName("videoBlog");
    var word= document.getElementsByClassName("word");
    var paragraph2= document.getElementById("paragraph2");
    if (n > blog2.length){
        videoIndex = 1
    }
    if (n < 1){
        videoIndex = blog2.length
    }
    for (z = 0; z < blog2.length; z++) {
        blog2[z].style.display = "none";
    }
    blog2[videoIndex - 1].style.display = "block";
    paragraph2.innerHTML = word[videoIndex - 1].alt;
}

var vid = document.getElementById("myVideo");

function pauseVid() {
    vid.pause();
}
function playVid() {
    vid.play();
}
var vid1 = document.getElementById("video1");

function pauseVid1() {
    vid1.pause();
}
function playVid1() {
    vid1.play();
}
var vid2 = document.getElementById("video2");

function pauseVid2() {
    vid2.pause();
}
function playVid2() {
    vid2.play();
}
var vid3 = document.getElementById("video3");

function pauseVid3() {
    vid3.pause();
}
function playVid3() {
    vid3.play();
}


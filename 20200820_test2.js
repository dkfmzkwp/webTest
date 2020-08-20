
var picture;
var imageList = [];
var imageIndex;

window.onload = function () {
    picture = document.getElementById("picture");
    imageList = ["./images/pic1.png", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png"]
}

function move(){
    imageIndex = 0;

    show = setInterval(function(){
        setImage(imageIndex++);
        if(imageIndex >= 4){
            imageIndex = 0;
        }
    }, 1000);
}

function setImage(index) {
    picture.src = imageList[index];
}
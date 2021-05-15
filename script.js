var plusCircle = document.querySelector(".fa-plus-circle");

window.onload = function() {
    var popupHide = document.querySelector(".popup");
    popupHide.style.visibility = "hidden";

    var flexBoxHide = document.querySelector("#flex-box");
    flexBoxHide.style.visibility = "hidden";

    var zoomCardHide = document.querySelector(".zoomCard")
    zoomCardHide.style.visibility = "hidden";

    var noItem = document.querySelector(".noItemFound");
    noItem.style.visibility = "visible";
};

plusCircle.addEventListener("click", function() {
    // var headingHide = document.querySelector(".heading-container");
    // headingHide.style.visibility = "hidden";

    var noItem = document.querySelector(".noItemFound");
    noItem.style.visibility = "hidden";

    var blurImage = document.querySelector(".container");
    blurImage.style.filter = "blur(5px)";
    // var backgroundShow  = document.querySelector(".bg-image");
    // backgroundShow.style.visibility = "visible";

    var popupShow = document.querySelector(".popup");
    popupShow.style.visibility = "visible";

    var createBox = document.getElementById("flex-box");
    createBox.style.visibility = "hidden";
    // console.log("connected");
});

var addClick = document.querySelector("#addbtn");
var textareaValue = document.querySelector("#textarea");
var clickedAdd = textareaValue.value;

addClick.addEventListener("click", function() {
    var clickedAdd = textareaValue.value;

    console.log(clickedAdd);
    var noItem = document.querySelector(".noItemFound");
    noItem.style.visibility = "hidden";

    var unblurImage = document.querySelector(".container");
    unblurImage.style.filter = "blur(0px)";

    var popupShow = document.querySelector(".popup");
    popupShow.style.visibility = "hidden";

    boxCreation(clickedAdd);


})
var createBox = document.getElementById("flex-box");
var listName = document.querySelector("#box-heading");

function boxCreation(clickedAdd) {
    createBox.style.visibility = "visible";
    listName.innerHTML = clickedAdd;
    var horLine = document.querySelector(".horLine");
    horLine.style.visibility = "visible";
}

listName.addEventListener("click", function listFullScreen() {
    var clickedAdd = textareaValue.value;
    console.log(clickedAdd);
    var onlyCardZoom = document.querySelector(".headToflex");
    onlyCardZoom.style.display = "none";
    createBox.style.display = "none";
    var zoomCard = document.querySelector(".zoomCard");
    zoomCard.style.visibility = "visible";
    var zoomCardName = document.querySelector("#zoomCardName");
    var zoomCardName2 = document.querySelector("#zoomCardName2");
    zoomCardName.innerHTML = clickedAdd;
    zoomCardName2.innerHTML = clickedAdd;
});
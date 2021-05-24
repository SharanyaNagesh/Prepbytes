var ListplusCircle = document.querySelector("#ListplusCircle");
var Item_plusCircle = document.querySelector("#Item_plusCircle");
var Item_plusCircleZoom = document.querySelector("#Item_plusCircleZoom");

window.onload = function() {
    document.querySelector("#popup").style.visibility = "hidden";
    document.querySelector(".Itempopup").style.visibility = "hidden";
    document.querySelector(".flex-container").style.visibility = "hidden";
    document.querySelector(".zoomCard").style.visibility = "hidden";
    document.querySelector(".noItemFound").style.visibility = "visible";
};

ListplusCircle.addEventListener("click", function() {

    document.querySelector(".noItemFound").style.visibility = "hidden";
    document.querySelector(".container").style.filter = "blur(5px)";
    document.querySelector("#popup>.new_list").innerHTML = "Add New List";
    document.querySelector("#popup").style.visibility = "visible";
    document.querySelector(".flex-container").style.visibility = "hidden";

});

function closepopup() {
    document.querySelector(".container").style.filter = "blur(0px)";
    document.querySelector(".noItemFound").style.visibility = "hidden";
    document.querySelector(".flex-container").style.visibility = "visible";
    document.querySelector("#popup").style.visibility = "hidden";
};

function closeItempopup() {
    document.querySelector(".headToflex").style.filter = "blur(0px)";
    document.querySelector(".noItemFound").style.visibility = "hidden";
    document.querySelector(".Itempopup").style.visibility = "hidden";
};

var addClick = document.querySelector(".addbtn");
var textareaValue = document.querySelector("#textarea");

addClick.addEventListener("click", function() {
    var clickedAdd = textareaValue.value;
    document.querySelector(".noItemFound").style.visibility = "hidden";
    document.querySelector(".container").style.filter = "blur(0px)";
    document.querySelector("#popup").style.visibility = "hidden";
    document.querySelector(".flex-container").style.visibility = "visible";
    boxCreation(clickedAdd);
})

function boxCreation(clickedAdd) {

    var createBox = document.createElement("div")
    createBox.setAttribute("class", "flex-box")
    createBox.setAttribute("id", Math.random().toString(36).substr(2));
    createBox.innerHTML = `
        <span class="fa-stack" id="circledTrash" onclick="removeCard(this)">
            <i class="fa fa-circle fa-stack-2x "></i> 
            <i class="fa fa-trash fa-stack-1x " aria-hidden="true"></i>
        </span>
        <i class="fa fa-plus-circle fa-2x" id="Item_plusCircle" aria-hidden="true" onclick="resetAndpopup(this)"></i>
        <p id="box-heading" onclick="listFullScreen()">${clickedAdd}</p>
        <hr class="horLine" />
        <div class="List-entries">   
        </div>`
    document.querySelector(".flex-container").appendChild(createBox);
}
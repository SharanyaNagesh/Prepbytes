function reset() {
    document.querySelector("#textarea").value = "";
}

function resetAndpopup(addbtnid) {
    if (addbtnid.parentNode.id === "zoomBoxId") {
        document.querySelector(".zoomCard").style.filter = "blur(10px)";
        document.querySelector(".headToflex").style.display = "none";
        document.querySelector(".Itempopup").style.visibility = "visible";
        addSubItem(addbtnid);
    } else {
        document.querySelector(".headToflex").style.filter = "blur(10px)";
        document.querySelector(".zoomCard").style.display = "none";
        document.querySelector(".Itempopup").style.visibility = "visible";
        addSubItem(addbtnid);
    }
}

var x;

function addSubItem(addbtnid) {
    x = addbtnid;
    document.querySelector(".textarea").value = "";
    document.querySelector(".Itempopup>.new_list").innerHTML = "Add New Item";

}

function removeCard(element) {
    if (element.parentNode.parentNode.hasChildNodes()) {
        var parent_id = element.parentNode.id;
        var parentChild = document.getElementById(parent_id);
        document.querySelector(".flex-container").removeChild(parentChild);
    } else {
        document.querySelector(".container-class").style.visibility = "visible";
    }
}

function taskCreation() {
    if (x.parentNode.id === "zoomBoxId") {
        closeItempopupZoom();
    } else {
        closeItempopup();
    }
    var inputval = document.querySelector(".textarea").value;
    var ID = x.parentNode.id;
    var item = document.createElement("div");
    item.setAttribute("class", "task-name-container")
    item.setAttribute("id", Math.random().toString(36).substr(2));
    item.innerHTML = `
        <span id="task-name">${inputval}</span>
        <button type="submit" id="markdone" onclick="completeTask(this)">Done?</button>`
    var box = document.getElementById(ID);
    box.querySelector(".List-entries").appendChild(item);
}


function completeTask(element) {
    var ID = element.parentNode.id;
    var subTask = document.getElementById(ID);
    subTask.querySelector("#markdone").style.visibility = "hidden";
    subTask.querySelector("#task-name").style.color = "green";
    subTask.querySelector("#task-name").style.marginLeft = "40px";
    subTask.querySelector("#task-name").style.fontWeight = "550px";
    subTask.querySelector("#task-name").style.textDecoration = "line-through";
    subTask.querySelector("#task-name").style.textDecorationColor = "light-green";

}
// -----------------------------Full screen card display------------------------------------------------------

function listFullScreen() {
    // var containerID = HeadID.parentNode.parentNode.id;
    // var createBox = document.getElementById(containerID);
    var clickedAdd = textareaValue.value;
    document.querySelector(".headToflex").style.display = "none";
    // createBox.style.visibility = "hidden";
    document.querySelector(".Itempopup").style.visibility = "hidden";
    document.querySelector(".zoomCard").style.visibility = "visible";
    document.querySelector("#zoomCardName").innerHTML = clickedAdd;
    document.querySelector("#zoomCardName2").innerHTML = clickedAdd;


};

function closeItempopupZoom() {
    document.querySelector(".zoomCard").style.filter = "blur(0px)";
    document.querySelector(".Itempopup").style.visibility = "hidden"
};

document.getElementById("back").addEventListener("click", function goBack() {
    document.querySelector(".zoomCard").style.visibility = "hidden";
    document.querySelector(".headToflex").style.display = "block";


});
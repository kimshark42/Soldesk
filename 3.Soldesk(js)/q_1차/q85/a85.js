//js
var btn;
var imgShark;

var isPopupOpened = false;	


window.onload = function(){
    btn = document.getElementById("btn");
    imgShark = document.getElementById("shark");

    // html 에
    // <input type="button" id="btn" value="고양이" onclick="popup();"></input>
    // 이런식으로 했던것과 동일한 처리임.

    btn.addEventListener("click",popup);

}

function popup(){
    if(isPopupOpened == false){
        imgShark.style.display = "inline";
        isPopupOpened = true;
    } else {
        imgShark.style.display = "none";
        isPopupOpened = false;
    }
}
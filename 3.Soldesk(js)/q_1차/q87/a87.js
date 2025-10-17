function xxx(){
    var popup = document.getElementById("popup");
    // popup.style.display = "none";
    popup.style.background = "pink";
    popup.style.width = "100px";
    popup.style.height = "100px";
    popup.style.fontSize = "3em";   //주의: font-size가 아니라 fontSize임 (변수명명제약때문일듯)
    popup.style.transitionProperty = "background, width, height, font-size"; // 주의: fontSize가 아니라 font-size임(원래 순수 css 속성명 나열)
    popup.style.transitionDuration = "1s";
}

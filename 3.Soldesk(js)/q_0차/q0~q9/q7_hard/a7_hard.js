var random=Math.floor(Math.random()*100)+1;
for( var i=1;  i <= random;  i=i+1  ) {
    if ( i == 7 ) { //황금상어 만들기
        document.write("<img id='gold_shark' src='shark.png' width='100px' height='100px'>");
        document.write(i);
        var gold_shark_img = document.getElementById("gold_shark");
        gold_shark_img.style.borderColor = "yellow";
        gold_shark_img.style.borderStyle = "solid";
        gold_shark_img.style.borderWidth = "10px";
    } else {
        document.write("<img src='shark.png' width='100px' height='100px'>");
        document.write(i);
    }
}
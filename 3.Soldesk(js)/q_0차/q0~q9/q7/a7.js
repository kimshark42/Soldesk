var random=Math.floor(Math.random()*100)+1;

for( var i=1;  i <= random;  i=i+1  ) {
    if ( i == 7 ) 
    { //    황금상어 출력
        document.write(i);

        document.write("<img id='gold_shark' src='shark.png'>");

        // var gold_shark_png = document.getElementById("gold_shark");        

        // gold_shark_png.style.borderColor = "yellow";

        // gold_shark_png.style.borderStyle = "solid";

        // gold_shark_png.style.borderWidth = "230px";

    } else {    // 생 고양이 출력
        document.write(i);
        document.write("<img src='shark.png'>");
    }
}

// if{
// }else if{
// }
// 이런 짓도 가능
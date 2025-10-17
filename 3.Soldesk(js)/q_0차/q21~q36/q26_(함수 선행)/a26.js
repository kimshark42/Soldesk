// 함수 이름은 영어로만

// function xx(){
//     document.write("상어 1호기");
//     document.write("상어 2호기");
//     document.write("상어 3호기");
// }

// for(var i=1;i<=3;i=i+1){
//     xx();
// }    

// function xx( ) <- 괄호 안에 든건 매개 변수, 여러가지를 넣을수 있음

function xx(yy){

    document.write("이번에 굴릴 주사위의 눈 수는:" +yy);
    document.write("<hr>")

    var r = Math.floor(Math.random()*yy)+1

    document.write(r);
    document.write("<hr>")
}

xx(6); //6면체
xx(12); //12면체
xx(36); //36면체체
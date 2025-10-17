// 지역 변수, 전역 변수

var shark = "상어";  // <- 이놈은 전역 변수 (글로벌 스타)


function x(){
    var whaleShark = "고래상어";     // <- 이놈은 지역변수
    console.log(whaleShark);          
    console.log(shark);
}

x();


//document.write(whaleShark);     // <- 이놈은 지역변수라 못 알아 먹음
document.write(shark);     // <- 이놈은 전역변수라 알아먹음

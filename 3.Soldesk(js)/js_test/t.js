
// // {}중괄호는 중첩도 가능


// for(var x=1 ; x < 6 ; x = x + 1)
// {
//     document.write("짱기여운상어<hr>")
// }

// window.onload -> 이 안쪽에 있는걸 준비만 해둔뒤 html을 전부 읽고 난 뒤 실행
// getElementById() -> 괄호 안에 있는것을 .innerHTML -> 앞에 있는 태그로 취급 
// innerHTML -> ""안에 있는것을 넣는다

window.onload=function(){
    var b=document.getElementById("a");
    b.innerHTML="<img src=logo.png>";
}
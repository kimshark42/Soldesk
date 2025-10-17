var str_id=""
var str_pw=""

var input_id;
var input_pw;

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
}

function login(){
    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "shark" && local_pw == "1234"){
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
}
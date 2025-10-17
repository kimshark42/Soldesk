// n은 0부터 시작
// n이 10보다 클경우 그만 나열해라 라는 뜻

var n=0

while(true){
    n=n+1;
    if(n>10){
        break;
    }
    else{
        document.write(n);
    }
}
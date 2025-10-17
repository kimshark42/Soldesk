//문 23 for -break 참고탭 참고
// for -break 반복 도중 어떤 조건을 만족하는 경우 반복문을 빠져나가고 싶을때 사용
// 1 ~ 10 랜덤값 준비
// 반복문 1 ~10 돌면서 1 ~ 10 출력
// 빈벅 도중 반복용 변수 값(var i)이 랜덤값과 일치하는 경우 반복문을 줄지

var r = Math.floor(Math.random()*10)+1; // 1 ~ 10 까지 범위 내에서 랜덤하게 숫자 하나 뽑아주는 예.
for(var i=1;i<=10;i=i+1){
    document.write(i);
    if(i == r){
        break;
    }
}
// 기본 문장
// var sea = "존나 귀여운 상어" ;
// document.write(sea)
// sea 는 박스 이름 뭐가 있든 큰 의미 없음
// document.write() <- 괄호 안에 있는 박스를 출력

// 위에서 부터 읽기 때문에 최종 출력이 3으로 뜸
// var a = 1;
// var b = 2;
// var c = a + b;
// document.write(c)

/* 표현 1 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "주사위를 굴려 ( " + random + " ) 이 나왔습니다.";
// document.write(s);


/* 표현 2 */
// var random;
// random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");


/* 표현 3 */
// var random = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write("주사위를 굴려 ( " + random + " ) 이 나왔습니다.");

/* 표현 4 */
// document.write("주사위를 굴려 ( " + (Math.floor(Math.random() * 6) + 1) + " ) 이 나왔습니다.");


// 변수란 데이터를 담는 상자(박스) 
// 변수 -> var
// var sea = "상어" -> 바다에 상어가 담겨있다 같은 의미
// 저 위에서 sea 는 박스의 이름을 정한것것

/* 6면체 */
var shark;
shark = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var s = "주사위를 굴려 ( " + shark + " ) 이 나왔습니다.";
document.write(s);

/* 4면체 */
var random2;
random2 = Math.floor(Math.random() * 4) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
var s2 = "주사위를 굴려 ( " + random2 + " ) 이 나왔습니다.";
document.write(s2);

//(Math.random() * n) -> 0 ~ n-1 만큼의 숫자가 나온다 
// 2 ~ 12 까지 나오게 하고 싶으면 (Math.random() * 11) + 2 를 하면 된다.

/* 12면체 */
var random3;
random3 = Math.floor(Math.random() * 11) + 2; //2 ~ 12 까지 범위 내에서 랜덤하게 숫자 하나 뽑기.
var s3 = "따이를 굴려( " + random3 + " ) 이 나왔습니다다";
document.write(s3);
function Shark(){	
	/* 속성 또는 프로퍼티들 */
	this.name = "";  // 이름
	this.age = 0;    // 나이
	this.weight = 0; // 몸무게
	this.family = "";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
	this.color = "";     // 털색
}


// 1. 클래스 객체를 생성하기.
new Shark();

// 2. 변수를 선언하고 여기에 위의(1번문제의) 클래스 객체 생성문을 넣기(대입하기).
var kimSahrk = new Shark();



// 3.이 클래스형 변수가 가진 name 변수에 이름을 넣기
kimSahrk.name = "김상어";
kimSahrk.age = 4;
kimSahrk.weight = "비밀임";
kimSahrk.family = "따이한 종";
kimSahrk.color = "등푸른 상어";


// 4.위 고양이 이름을 출력하기
document.write(kimSahrk.name);  br();
document.write(kimSahrk.age); br();
document.write(kimSahrk.weight);  br();
document.write(kimSahrk.family);  br();
document.write(kimSahrk.color);  br();


// 문47의 키티에 나머지 값들도 넣어주시고 각각 다 출력

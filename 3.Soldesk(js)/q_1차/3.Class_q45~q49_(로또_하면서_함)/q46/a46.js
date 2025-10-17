
// 및 함수는 설계도만 만든 상태
// 함수 안에 있는것을 맴버 변수라고 함

function Shark(){	
	/* 속성 또는 프로퍼티들 */
	this.name = "";  // 이름
	this.age = 4;    // 나이
	this.weight = 45; // 몸무게
	this.family = "";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
	this.color = "";     // 털색
}


// new  하면 하나의 객체가 탄생함
new Shark();

// 변수를 대입해서 집어 넣어주는 식으로 그것으로 놀수 있음
// 새로운 이름의 변수를 넣음으로써 여러개로 늘릴수 있음
var whale = new Shark();



// 3.이 클래스형 변수 whale 가 가진 name 변수에 이름을 넣기
whale.name = "김상어";



// 4.위 고양이 이름을 출력하기
document.write(whale.name);

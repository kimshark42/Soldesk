// 문 48에서 썻던 클래스에 새로운 멤버함수를 추가

function Shark(){	
	/* 속성 또는 프로퍼티들 */
	this.name = "";  // 이름
	this.age = 0;    // 나이
	this.weight = 0; // 몸무게
	this.family = "";    // 종류 (ex. 코리안숏헤어, 페르시아고양이)
	this.color = "";     // 털색

	/*멤버 함수들 선언*/
	this.crying = function(){
		dw("보글보글")
	}
	this.eat =function(food){
		dw(this.name + "가" + food + "를 먹습니다"+"와그작 와그작")
	}
}


// 1. 클래스 객체를 생성하기.
new Shark();

// 2. 변수를 선언하고 여기에 위의(1번문제의) 클래스 객체 생성문을 넣기(대입하기).
var whaleShark = new Shark();



// 3.이 클래스형 변수가 가진 name 변수에 이름을 넣기
whaleShark.name = "김상어";
whaleShark.age = 4;
whaleShark.weight = "비밀임";
whaleShark.family = "따이한 종";
whaleShark.color = "등푸른 상어";


// 4.위 고양이 이름을 출력하기
document.write(whaleShark.name);  br();
document.write(whaleShark.age); br();
document.write(whaleShark.weight);  br();
document.write(whaleShark.family);  br();
document.write(whaleShark.color);  br();


br();br();

// 추가로 위 클래스로 부터 새로운 객체를 하나 더 만들기(기존 객체는 내비두고). 					
var fishShark = new Shark();
// 속성 값들도 임의로 전부 주시고
fishShark.name = "고래상어";
fishShark.age = 8;
fishShark.weight = "11t";
fishShark.family = "고래상어";
fishShark.color = "따이한 점박이색";

// 4.위 객체 이름을 출력하기
document.write(fishShark.name);  br();
document.write(fishShark.age); br();
document.write(fishShark.weight);  br();
document.write(fishShark.family);  br();
document.write(fishShark.color);  br();



br();
br();

// 객체들의 서열정리 나이를 비교하여	ex.	형님 고양이: 야옹이	식으로 출력 처리하기
if(whaleShark.age > fishShark.age){
    document.write("김상어가 꼬맹이");
}else if(whaleShark.age < fishShark.age){
    document.write("고래상어가 더 나이가 많음");
}else{
    document.write("둘은 친구");
}

br();br();

whaleShark.crying();
fishShark.crying();

br();br();

whaleShark.eat("당신")

// 				동생 고양이: 키티		
// 				둘은 친구임	(같으면)	

// 문20	반복문 - 별찍기

/*

**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *

이런 모양 나오게

&nbsp 는 스페이스바랑 같은 의미

*/

for(var i=1; i<=3; i=i+1){

    for(var k=1; k <= i -1; k=k+1){
        document.write("&nbsp;")
    }

    for(var j=3; j>=i; j=j-1){
        document.write("*");
    }
    document.write("<br>");
}
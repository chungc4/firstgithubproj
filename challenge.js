
/*
var hash =  "#"
for (i = 0; i < 4 ; i++){
	document.write(hash);
	hash = hash + "#"
	document.write("<br/>")
}
for (i = 3; i >= 1 ; i--){
	for (j = 0; j < i; j++){
	
  document.write("#");
}
  document.write("<br/>")
}
*/

/*
var chessboard = "#"
var size = 8


for (k = 0; k < size; k++){
	for (i = 0; i < size; i++){
		if((i+k) % 2 !== 0){
			document.write(chessboard)
		}
		else {
			document.write("_")
		}

  	}
  document.write("<br/>")
}
*/

var x = 1
var y = 1


for(i=0; i < 100; i++) {
	if (i < 1) {
		document.write("1")
		document.write("<br/>")
	}
	else if (x <= 100 || y <=100) {
	document.write(x = x + y);
	document.write("<br/>");
	document.write(y = y + x);
	document.write("<br/>");
	}
	else {
		document.write ("")
	}
}

while (num1 < 100 || num2 < 100){
	document.write(num1);
	document.write(num2);
	num1 = num1+num2;
	document.write("<br/>")';'
	num2 = num2+num1;
	document.write("<br/>");
}